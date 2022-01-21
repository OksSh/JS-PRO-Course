import styles from './AboutPersonCard.module.css';
import logo from '../img/logo.jpg';
import hangouts from '../img/Hangouts.png';
import linked from '../img/Linked.png';
import twitter from '../img/Twitter.png';

export function AboutPersonCard(props) {
  const { name, job, description, image } = props;
  return (
    <div className={styles.card1}>
      <div className={styles.card1__block1}>
        <img src={image} className={styles.card1__img} />
        <p className={styles.card1__text__name}>{name}</p>
        <p className={styles.card1__text__profession}>{job}</p>
      </div>
      <div className={styles.card1__block2}>
        <p className={styles.card1__text__description}>{description}</p>
        <div>
          <img className={styles.card1__icon} src={linked} />
          <img className={styles.card1__icon} src={hangouts} />
          <img className={styles.card1__icon} src={twitter} />
        </div>
      </div>
    </div>
  );
}
