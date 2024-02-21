import styles from "./index.module.scss";

export default function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.background__circle} />
      <div className={styles.background__circle} />
      <div className={styles.background__circle} />
      <div className={styles.background__circle} />
    </div>
  );
}