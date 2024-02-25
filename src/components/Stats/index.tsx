import style from "./index.module.scss";

interface Props {
  score: number,
  record: number
}

export default function Stats({ score, record }: Props) {
  return (
    <div className={style.stats}>
      <div className={style.stats__item}>
        <p className={style.item__description}>Рекорд</p>
        <h1 className={style.item__title}>{score}</h1>
      </div>
      <div className={style.stats__item}>
        <p className={style.item__description}>Место в рейтинге</p>
        <h1 className={style.item__title}>{record}</h1>
      </div>
    </div>
  );
}