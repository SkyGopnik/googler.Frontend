import { AProps } from "react-html-props";
import classNames from "classnames";

import style from "./index.module.scss";

interface Props extends AProps {
  avatar: string,
  title: string,
  description: string,
  place: number,
  isActive?: boolean
}

export default function Item({ avatar, title, description, place, isActive, ...props }: Props) {
  return (
    <a {...props} className={classNames(style.item, { [style.itemActive]: isActive }, props.className)}>
      <img className={style.item__avatar} src={avatar} alt="Аватар пользователя" />
      <div className={style.item__info}>
        <span className={style.info__title}>{title}</span>
        <p className={style.info__description}>{description}</p>
      </div>
      <span className={style.item__place}>{place} место</span>
    </a>
  );
}