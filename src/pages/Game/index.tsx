import CountUp from "react-countup";
import Page from "components/Page";
import { useGameStore } from "store/game";
import axios from "axios";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Background from "components/Background";
import { delay } from "utils/delay";
import { getStaticUrl } from "utils/getStaticUrl";

import Button from "./_components/Button";

import style from "./index.module.scss";

type AnswerType = "MORE" | "LESS";

export default function GamePage() {
  const navigate = useNavigate();

  const {
    game,
    stats,
    requests,
    setGame,
    setStats,
    setRequests
  } = useGameStore();

  const [animationActive, setAnimationActive] = useState(false);
  const [loading, setLoading] = useState<{
    [key in AnswerType]: boolean
  }>({
    LESS: false,
    MORE: false
  });

  const selectAnswer = async (type: AnswerType) => {
    setLoading((value) => ({
      ...value,
      [type]: true
    }));

    try {
      const { data } = await axios.post("/games/" + game!.id, {
        type
      });

      if (data.type === "FAILED") {
        navigate("/game/retry");
      }

      const { score } = data.game;

      if (score > stats!.record) {
        setStats({
          ...stats!,
          record: score
        });
      }

      setGame(data.game);
      setRequests([...data.requests, ...requests]);

      await showAnimation();
    } catch (e) {
      navigate("/game/finish");
    }

    setLoading((value) => ({
      ...value,
      [type]: false
    }));
  };

  const showAnimation = async () => {
    setAnimationActive(true);

    await delay(500);

    setAnimationActive(false);
  };

  const [firstRequest, secondRequest] = useMemo(() => requests, [requests]);

  const disabled = loading.LESS || loading.MORE;

  return (
    <Page className={style.play}>
      <div className={style.play__score}>Твой счет: {game?.score}</div>
      <div className={style.play__request}>
        <h2 className={style.request__title}>{firstRequest.value}</h2>
        <p className={style.request__description}>
          <span>гуглится около</span>
          <CountUp
            className={style.count}
            separator=" "
            start={secondRequest.count}
            end={firstRequest.count}
          />
          <span>раз в месяц</span>
        </p>
      </div>
      <div className={style.play__question}>
        <h2 className={style.question__title}>Сколько раз в месяц гуглится</h2>
        <p className={style.question__description}>{secondRequest.value}?</p>
        <div className={style.question__actions}>
          <Button
            type="less"
            loading={loading.LESS}
            disabled={disabled}
            onClick={() => selectAnswer("LESS")}
          >
            Меньше
          </Button>
          <Button
            type="more"
            loading={loading.MORE}
            disabled={disabled}
            onClick={() => selectAnswer("MORE")}
          >
            Больше
          </Button>
        </div>
      </div>
      <div className={style.play__background}>
        <img src={getStaticUrl(firstRequest.imageId)} alt="Верхнее изображение" />
        <img src={getStaticUrl(secondRequest.imageId)} alt="Нижнее изображение" />
      </div>
      <Background
        type="success"
        isActive={animationActive}
      />
    </Page>
  );
}