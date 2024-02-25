import { useNavigate } from "react-router";
import axios from "axios";
import { useGameStore } from "store/game";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import Button from "components/Button";

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
      <Button onClick={startGame}>
        {game ? "Продолжить" : "Начать"} игру
      </Button>
      <Button type="outline">
        Рейтинг
      </Button>
    </div>
  );
}