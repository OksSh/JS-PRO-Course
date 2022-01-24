import styles from './Counter.module.css';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className={styles.counterWrapper}>
      <button className={styles.buttonIncrement} onClick={increment}>
        +
      </button>
      <p>{count}</p>
      <button className={styles.buttonDecrement} onClick={decrement}>
        -
      </button>
      <button className={styles.buttonReset} onClick={reset}>
        Reset
      </button>
    </div>
  );
}
