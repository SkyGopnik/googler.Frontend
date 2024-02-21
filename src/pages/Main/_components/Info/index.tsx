import style from "./index.module.scss";

export default function Info() {
  return (
    <div className={style.info}>
      <div className={style.info__item}>
        <p className={style.item__description}>Рекорд</p>
        <h1 className={style.item__title}>1000</h1>
      </div>
      <div className={style.info__item}>
        <p className={style.item__description}>Место в рейтинге</p>
        <h1 className={style.item__title}>2</h1>
      </div>
    </div>
  );
}