import { DivProps } from "react-html-props";
import classNames from "classnames";

import style from "./index.module.scss";

interface Props extends DivProps {
  avatar: string,
  title: string,
  description: string,
  place: number
}

export default function Item({ avatar, title, description, place, ...props }: Props) {
  return (
    <div {...props} className={classNames(style.item, props.className)}>
      <img className={style.item__avatar} src={avatar} alt="Аватар пользователя" />
      <div className={style.item__info}>
        <span className={style.info__title}>{title}</span>
        <p className={style.info__description}>{description}</p>
      </div>
      <span className={style.item__place}>{place} место</span>
    </div>
  );
}