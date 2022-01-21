import styles from './Main.module.css';
import section1Tablet from '../img/section1_tablet.png';
import section3Instruments from '../img/section3_instruments.png';
import section5Tablet from '../img/section5_tablet.png';
import section6Tablet from '../img/section6_tablet.png';
import logoSetup from '../img/logoSetup.png';

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapperSection1}>
        <div className={styles.container}>
          <div className={styles.section1}>
            <div className={styles.section1__item}>
              <h1>Creativity at your fingertips</h1>
              <p>
                Whether you’re coloring inside the lines or thinking outside the
                box, it’s never been easier to get ideas on Paper
              </p>
              <div className={styles.section1__buttons}>
                <button>Download</button>
                <button>Explore</button>
              </div>
            </div>
            <div>
              <img src={section1Tablet} alt='tablet' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperSection2}>
        <div className={styles.container}>
          <div className={styles.section2}>
            <div className={styles.mainTextBlock}>
              <h2 className={styles.mainTextBlock__title}>
                Bring life to your ideas
              </h2>
              <p className={styles.mainTextBlock__text}>
                We’ve polished every tap, swipe, and pinch to mirror your
                natural gestures. Watch life-like journals jump from the page,
                while 3D interactions create our most immersive experience yet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperSection3}>
        <div className={styles.container}>
          <div className={styles.section3}>
            <div className={styles.section3__titles}>
              <h2>Effortless expression</h2>
              <p>
                Bring your ideas to life in all their messy glory. Paper’s
                perfectly-tuned tools make it easy to sketch, write, paint,
                draw—wherever your thoughts take you.
              </p>
            </div>
            <div className={styles.section3__image}>
              <img src={section3Instruments} alt='Paints' />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.section4}>
        <div className={styles.container}></div>
      </div> */}
      <div className={styles.wrapperSection6}>
        <div className={styles.container}>
          <div className={styles.section5}>
            <div className={styles.section5_image}>
              <img src={section5Tablet} alt='Tablet' />
            </div>
            <div className={styles.mainTextBlock}>
              <h2
                className={`${styles.mainTextBlock__title} ${styles.mainTextBlock__title_color}`}
              >
                Your ideas, your way
              </h2>
              <p
                className={`${styles.mainTextBlock__text} ${styles.mainTextBlock__text_color}`}
              >
                Organize pages into beautiful journals and sync them across your
                devices. So wherever and whenever inspiration strikes, you’re
                ready to pick ideas up right where you left them.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperSection6}>
        <div className={styles.container}>
          <div className={styles.section6}>
            <div className={styles.mainTextBlock}>
              <h2
                className={`${styles.mainTextBlock__title} ${styles.mainTextBlock__title_color}`}
              >
                The quickest way to collage
              </h2>
              <p
                className={`${styles.mainTextBlock__text} ${styles.mainTextBlock__text_color}`}
              >
                Add multiple photos to a single page and cut, stick, move, and
                fix without the fuss of complex layers. From moodboards to
                storyboards, pull inspiration from anywhere and get ideas
                flowing.
              </p>
            </div>
            <div className={styles.section6_image}>
              <img src={section6Tablet} alt='Tablet' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section7}>
        <div className={styles.container}>
          <div className={styles.section7__item}>
            <img src={logoSetup} alt='App logo' />
            <p>Available for iPhone and iPad</p>
            <button>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
