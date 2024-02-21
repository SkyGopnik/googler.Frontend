import classNames from "classnames";

import style from "./index.module.scss";

export default function Actions() {
  return (
    <div className={style.actions}>
      <button
        className={classNames(
          style.actions__button,
          style.actions__buttonPlay
        )}
      >
        Начать игру
      </button>
      <button
        className={style.actions__button}
      >
        Рейтинг
      </button>
    </div>
  );
}