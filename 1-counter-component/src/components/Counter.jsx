import { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div className={styles.counterWrapper}>
        <h1 className={styles.title}>Counter</h1>
        <div className={styles.countContainer}>
          <span>{count}</span>
        </div>
        <div className={styles.controlsContainer}>
          <button className={styles.increaseButton} onClick={handleIncrease}>
            +
          </button>
          <button className={styles.resetButton} onClick={handleReset}>
            Reset
          </button>
          <button className={styles.decreaseButton} onClick={handleDecrease}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;
