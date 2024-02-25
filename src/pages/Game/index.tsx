import classNames from "classnames";
import CountUp from "react-countup";
import Page from "components/Page";
import { useGameStore } from "store/game";
import axios from "axios";
import { useMemo } from "react";
import { useNavigate } from "react-router";

import style from "./index.module.scss";

export default function GamePage() {
  const navigate = useNavigate();

  const {
    game,
    requests,
    setRequests
  } = useGameStore();

  const selectAnswer = async (type: "MORE" | "LESS") => {
    try {
      const { data } = await axios.post("/games/" + game!.id, {
        type
      });

      if (data.type === "FAILED") {
        navigate("/game/retry");
      }

      setRequests([...data.requests, ...requests]);
    } catch (e) {
      navigate("/game/finish");
    }
  };

  const [firstRequest, secondRequest] = useMemo(() => requests, [requests]);
  const staticUrl = axios.defaults.baseURL + "static/";

  return (
    <Page className={style.play}>
      {/*<div className={style.play__score}>Твой счет: 20</div>*/}
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
        <img src={staticUrl + firstRequest.imageId + ".jpeg"} alt="Верхнее изображение" />
        <img src={staticUrl + secondRequest.imageId + ".jpeg"} alt="Нижнее изображение" />
      </div>
    </Page>
  );
}