import classNames from "classnames";

import { BackgroundProps } from "./types";

import style from "./index.module.scss";

export default function Background({
  type = "default",
  isActive = false
}: BackgroundProps) {
  return (
    <div
      className={classNames(
        style.background,
        style[`backgroundType_${type}`],
        { [style.backgroundActive]: isActive }
      )}
    >
      <div className={style.background__circle} />
      <div className={style.background__circle} />
      <div className={style.background__circle} />
      <div className={style.background__circle} />
    </div>
  );
}