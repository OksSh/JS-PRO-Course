//name, postDescription, location, timeText, функции onClickLike, onClickReply
import styles from './Card.module.css';

export function Card(props) {
  function onClickLike() {
    alert('Like');
  }

  function onClickReply() {
    alert('Reply');
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={'img/photo.png'} alt='' />
      </div>
      <div className={styles.card__informationBlock}>
        <div className={styles.card__name}>
          <p>
            <span>{props.name}</span>
          </p>
          <p>{props.location}</p>
        </div>
        <div className={styles.card__postDescription}>
          <p>{props.postDescription}</p>
        </div>
        <div className={styles.card__href}>
          <a onClick={onClickLike} href='./'>
            Like
          </a>
          <a onClick={onClickReply} href='./'>
            Reply
          </a>
          <p>{props.timeText}</p>
        </div>
      </div>
    </div>
  );
}
