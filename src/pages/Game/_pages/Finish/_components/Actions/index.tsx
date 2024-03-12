import Button from "components/Button";
import { useGameStore } from "store/game";
import { useNavigate } from "react-router";

import style from "./index.module.scss";

export default function Actions() {
  const navigate = useNavigate();

  const { startGame } = useGameStore();

  const handleStartGame = async () => {
    await startGame();

    navigate("/game");
  };

  return (
    <div className={style.actions}>
      <Button onClick={handleStartGame}>
        Играть заново
      </Button>
      <Button type="outline" onClick={() => navigate("/rating")}>
        Рейтинг
      </Button>
    </div>
  );
}