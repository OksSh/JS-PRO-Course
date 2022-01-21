import styles from './Footer.module.css';

export function Footer() {
  return (
    <div className={styles.wrapperFooter}>
      <div className={styles.container}>
        <div className={styles.Footer}>
          <p>© 2021 WeTransfer</p>
        </div>
      </div>
    </div>
  );
}
