import Button from "components/Button";

import style from "./index.module.scss";

export default function Actions() {
  return (
    <div className={style.actions}>
      <Button>
        Играть заново
      </Button>
      <Button type="outline">
        Рейтинг
      </Button>
    </div>
  );
}