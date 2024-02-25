import Button from "components/Button";
import { useNavigate } from "react-router";

import style from "./index.module.scss";

export default function GameRetryPage() {
  const navigate = useNavigate();

  return (
    <div className={style.retry}>
      <Button onClick={() => navigate("/game")}>Продолжить</Button>
    </div>
  );
}