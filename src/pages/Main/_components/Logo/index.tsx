import RainbowTitle from "./_components/RainbowTitle";

import LineImage from "./_assets/line.svg";

import style from "./index.module.scss";

export default function Logo() {
  return (
    <h1 className={style.logo}>
      <span>Что <RainbowTitle /> больше?</span>
      <img src={LineImage} alt="" />
    </h1>
  );
}