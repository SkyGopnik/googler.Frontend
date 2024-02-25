import classNames from "classnames";
import { useNavigate } from "react-router";
import axios from "axios";
import { useGameStore } from "store/game";
import { useAsyncEffect } from "hooks/useAsyncEffect";

import style from "./index.module.scss";

export default function Actions() {
  const { game, setGame, setRequests } = useGameStore();

  const navigate = useNavigate();

  useAsyncEffect(async () => {
    const { data } = await axios.get("/games/active");

    if (!data) {
      return;
    }

    setGame(data);
  }, []);

  const startGame = async () => {
    const { data } = await axios.post(
      !game ? "/games/new" : `/games/${game.id}/continue`
    );

    if (!game) {
      setGame(data.game);
    }

    setRequests(data.requests);

    navigate("/game");
  };

  return (
    <div className={style.actions}>
      <button
        className={classNames(
          style.actions__button,
          style.actions__buttonPlay
        )}
        onClick={startGame}
      >
        {game ? "Продолжить" : "Начать"} игру
      </button>
      <button
        className={style.actions__button}
      >
        Рейтинг
      </button>
    </div>
  );
}