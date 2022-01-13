import styles from './Card2.module.css';
import { Component } from 'react';
import logo from '../img/logo.jpg';

export class Card2 extends Component {
  render() {
    return (
      <div className={styles.card2}>
        <div className={styles.card2__person}>
          <div className={styles.card2__text}>
            <p className={styles.card2__text__name}>Peter Medina</p>
            <p className={styles.card2__about}>Web Developer</p>
            <p className={styles.card2__about}>
              Skills: Theme, pligin and website development
            </p>
          </div>
          <div>
            <img className={styles.card2__image} src={logo} alt='photo' />
          </div>
        </div>
        <div className={styles.card2__data}>
          <div className={styles.card2__data__item}>
            <p className={styles.card2__data__text}>5.2K</p>
            <p className={styles.card2__data__text2}>Fans</p>
            <button
              className={`${styles.card2__data__button} ${styles.primary} `}
            >
              Like
            </button>
          </div>
          <div className={styles.card2__data__item}>
            <p className={styles.card2__data__text}>1.4K</p>
            <p className={styles.card2__data__text2}>Following</p>
            <button
              className={`${styles.card2__data__button} ${styles.secondary} `}
            >
              Tweet
            </button>
          </div>
          <div className={styles.card2__data__item}>
            <p className={styles.card2__data__text}>3.8K</p>
            <p className={styles.card2__data__text2}>Followers</p>
            <button
              className={`${styles.card2__data__button} ${styles.third} `}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    );
  }
}
