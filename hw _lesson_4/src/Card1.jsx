import styles from './Card1.module.css';
import logo from '../img/logo.jpg';
import hangouts from '../img/Hangouts.png';
import linked from '../img/Linked.png';
import twitter from '../img/Twitter.png';

export function GetCard1() {
  return (
    <div className={styles.card1}>
      <div className={styles.card1__block1}>
        <img src={logo} className={styles.card1__img} />
        <p className={styles.card1__text__name}>Peter Medina</p>
        <p className={styles.card1__text__profession}>Web Developer</p>
      </div>
      <div className={styles.card1__block2}>
        <p className={styles.card1__text__description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, atque?
          Repellat asperiores blanditiis, eligendi culpa corrupti dolor quasi
          deleniti omnis tenetur voluptatem laudantium excepturi perferendis
          consequatur ex mollitia possimus praesentium?
        </p>
        <div>
          <img className={styles.card1__icon} src={linked} />
          <img className={styles.card1__icon} src={hangouts} />
          <img className={styles.card1__icon} src={twitter} />
        </div>
      </div>
    </div>
  );
}
