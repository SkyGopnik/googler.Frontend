import classNames from "classnames";
import CountUp from "react-countup";
import Page from "components/Page";
import { useGameStore } from "store/game";
import axios from "axios";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Background from "components/Background";
import { delay } from "utils/delay";
import { getStaticUrl } from "utils/getStaticUrl";

import style from "./index.module.scss";

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

  const selectAnswer = async (type: "MORE" | "LESS") => {
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
  };

  const showAnimation = async () => {
    setAnimationActive(true);

    await delay(500);

    setAnimationActive(false);
  };

  const [firstRequest, secondRequest] = useMemo(() => requests, [requests]);

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
          <button
            className={classNames(
              style.actions__button,
              style.actions__buttonLess
            )}
            onClick={() => selectAnswer("LESS")}
          >
            Меньше
          </button>
          <button
            className={classNames(
              style.actions__button,
              style.actions__buttonMore
            )}
            onClick={() => selectAnswer("MORE")}
          >
            Больше
          </button>
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