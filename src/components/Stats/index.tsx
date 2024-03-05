import { DivProps } from "react-html-props";
import classNames from "classnames";

import style from "./index.module.scss";

interface Props extends DivProps {
  score?: number,
  record?: number,
  position?: number
}

export default function Stats({ score, record, position, ...props }: Props) {
  return (
    <div
      {...props}
      className={classNames(
        style.stats,
        props.className
      )}
    >
      {score !== undefined && (
        <div className={style.stats__item}>
          <p className={style.item__description}>Твой счет</p>
          <h1 className={style.item__title}>{score}</h1>
        </div>
      )}
      {record !== undefined && (
        <div className={style.stats__item}>
          <p className={style.item__description}>Рекорд</p>
          <h1 className={style.item__title}>{record}</h1>
        </div>
      )}
      {position !== undefined && (
        <div className={style.stats__item}>
          <p className={style.item__description}>Место в рейтинге</p>
          <h1 className={style.item__title}>{position}</h1>
        </div>
      )}
    </div>
  );
}