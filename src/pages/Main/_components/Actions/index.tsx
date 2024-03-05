import { useNavigate } from "react-router";
import axios from "axios";
import { useGameStore } from "store/game";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import Button from "components/Button";
import { useState } from "react";

import style from "./index.module.scss";

export default function Actions() {
  const { startGame } = useGameStore();

  const navigate = useNavigate();

  const [activeGameId, setActiveGameId] = useState();

  useAsyncEffect(async () => {
    const { data } = await axios.get("/games/active");

    if (!data) {
      return;
    }

    setActiveGameId(data.id);
  }, []);

  const handleStartGame = async () => {
    await startGame(activeGameId);

    navigate("/game");
  };

  return (
    <div className={style.actions}>
      <Button onClick={handleStartGame}>
        {activeGameId ? "Продолжить" : "Начать"} игру
      </Button>
      <Button type="outline" onClick={() => navigate("/rating")}>
        Рейтинг
      </Button>
    </div>
  );
}