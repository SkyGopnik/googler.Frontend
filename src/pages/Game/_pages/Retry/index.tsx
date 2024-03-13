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
import { useState } from "react";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import { declNum } from "utils/declNum";

import style from "./index.module.scss";

export default function GameRetryPage() {
  const groupOptions = {
    group_id: 210602912
  };

  const { requests, game } = useGameStore();

  const navigate = useNavigate();

  const [userSubscribed, setUserSubscribed] = useState(false);

  useAsyncEffect(async () => {
    try {
      const groupInfo = await bridge.send("VKWebAppGetGroupInfo", groupOptions);
      setUserSubscribed(groupInfo.is_member === 1);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleContinueGame = async () => {
    try {
      if (userSubscribed) {
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

    bridge.send("VKWebAppShowNativeAds", {
      ad_format: EAdsFormats.INTERSTITIAL
    }).catch((err) => console.log(err));

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
            <span>{declNum(previousRequest.count, ["раз", "раза", "раз"])} в месяц</span>
          </p>
        </div>
        <p className={style.caption}>Продолжи раунд, {userSubscribed ? "посмотрев небольшую рекламу" : "подписавшись на группу"}</p>
        <div className={style.actions}>
          <Button onClick={handleContinueGame}>Продолжить игру</Button>
          <Button type="ghost" onClick={handleEndGame}>Завершить раунд</Button>
        </div>
      </PageContent>
      <Background type="fail" />
    </Page>
  );
}