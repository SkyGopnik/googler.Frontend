import classNames from "classnames";

import { BackgroundProps } from "./types";

import style from "./index.module.scss";

export default function Background({ type = "default" }: BackgroundProps) {
  return (
    <div
      className={classNames(
        style.background,
        style[`backgroundType_${type}`]
      )}
    >
      <div className={style.background__circle} />
      <div className={style.background__circle} />
      <div className={style.background__circle} />
      <div className={style.background__circle} />
    </div>
  );
}