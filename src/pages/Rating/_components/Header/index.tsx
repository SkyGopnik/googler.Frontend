import { useNavigate } from "react-router";

import ChevronIcon from "./_assets/chevron.svg";

import style from "./index.module.scss";

interface Props {
  children: string
}

export default function Header({ children }: Props) {
  const navigate = useNavigate();

  return (
    <div className={style.header}>
      <button className={style.header__back} onClick={() => navigate(-1)}>
        <img src={ChevronIcon} alt="Ионка назад" />
      </button>
      <span className={style.header__text}>{children}</span>
    </div>
  );
}