import style from "./index.module.scss";

export default function RainbowTitle() {
  return (
    <span className={style.title}>
      <span>г</span>
      <span>у</span>
      <span>г</span>
      <span>л</span>
      <span>я</span>
      <span>т</span>
    </span>
  );
}