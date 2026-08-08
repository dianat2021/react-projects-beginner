import { useState } from "react";
import styles from "./ProgressBar.module.css";
import { useEffect } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.barContainer}>
        <div className={styles.bar}></div>
        <p className={styles.progressPercentage}>{progress} %</p>
      </div>
    </div>
  );
};
export default ProgressBar;
