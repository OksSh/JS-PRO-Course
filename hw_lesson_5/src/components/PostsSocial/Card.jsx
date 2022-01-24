import styles from './Card.module.css';

export function Card({ title, subtitle, author }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__subtitle}>{subtitle}</p>
      <h3 className={styles.card__author}>
        Author: <span>{author}</span>
      </h3>
    </div>
  );
}
