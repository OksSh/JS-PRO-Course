import styles from './Header.module.css';
import logo from '../img/logo.png';
import logoMain from '../img/logoMain.png';
import logoMainText from '../img/logoMainText.png';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <img src={logo} alt='logo' className={styles.sectionHeader__img} />
            <a href='' className={styles.sectionHeader__link}>
              About
            </a>
          </div>
          <div className={styles.sectionHeader__item}>
            <img
              src={logoMain}
              alt='logo'
              className={styles.sectionHeader__img}
            />
            <img
              src={logoMainText}
              alt='textLogo'
              className={styles.sectionHeader__img}
            />
          </div>
          <div>
            <a href='' className={styles.sectionHeader__link}>
              Help
            </a>
            <a href='' className={styles.sectionHeader__link}>
              Explore
            </a>
            <button className={styles.sectionHeader__button}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
