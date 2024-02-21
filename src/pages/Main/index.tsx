import Background from "components/Background";

import Actions from "./_components/Actions";
import Info from "./_components/Info";
import RainbowTitle from "./_components/RainbowTitle";

import LineImage from "./_assets/line.svg";

import style from "./index.module.scss";

export default function MainPage() {
  return (
    <div className={style.main}>
      <Background />
      <h1 className={style.main__title}>
        <span>Что <RainbowTitle /> больше?</span>
        <img src={LineImage} alt="" />
      </h1>
      <Info />
      <Actions />
    </div>
  );
}