import { useNavigate } from "react-router";
import Page from "components/Page";
import PageContent from "components/PageContent";
import Background from "components/Background";
import Title from "components/Title";
import CountUp from "react-countup";
import Button from "components/Button";
import axios from "axios";
import { useGameStore } from "store/game";
import { getStaticUrl } from "utils/getStaticUrl";
import bridge, { EAdsFormats } from "@vkontakte/vk-bridge";

import style from "./index.module.scss";

export default function GameRetryPage() {
  const { requests, game } = useGameStore();

  const navigate = useNavigate();

  const handleContinueGame = async () => {
    const supported = bridge.supports("VKWebAppJoinGroup");

    if (!supported) {
      return navigate("/game");
    }

    try {
      const groupOptions = {
        group_id: 210602912
      };

      const groupInfo = await bridge.send("VKWebAppGetGroupInfo", groupOptions);

      if (groupInfo.is_member === 1) {
        bridge.send("VKWebAppShowNativeAds", {
          ad_format: EAdsFormats.REWARD
        }).catch((err) => console.log(err));
      } else {
        await bridge.send("VKWebAppJoinGroup", groupOptions);
      }

      navigate("/game");
    } catch (e) {
      console.error(e);
    }
  };

  const handleEndGame = async () => {
    await axios.post(`/games/${game!.id}/finish`);

    navigate("/game/finish");
  };

  const previousRequest = requests[0];

  return (
    <Page>
      <PageContent>
        <Title className={style.title}>Проигрыш</Title>
        <div className={style.info}>
          <img
            className={style.info__preview}
            src={getStaticUrl(previousRequest.imageId)}
            alt="Маленькое изображение"
          />
          <h2 className={style.info__title}>{previousRequest.value}</h2>
          <p className={style.info__description}>
            <span>гуглится около</span>
            <CountUp
              className={style.count}
              separator=" "
              start={0}
              end={previousRequest.count}
            />
            <span>раз в месяц</span>
          </p>
        </div>
        <p className={style.caption}>Продолжи раунд, посмотрев небольшую рекламу</p>
        <div className={style.actions}>
          <Button onClick={handleContinueGame}>Продолжить игру</Button>
          <Button type="ghost" onClick={handleEndGame}>Завершить раунд</Button>
        </div>
      </PageContent>
      <Background type="fail" />
    </Page>
  );
}