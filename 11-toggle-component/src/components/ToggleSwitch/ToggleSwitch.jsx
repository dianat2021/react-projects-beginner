import { useState } from "react";
import styles from "./ToggleSwitch.module.css";
const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.toggleButton} ${isActive ? styles.active : ""}`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span className={styles.toggleCircle}></span>
      </button>
    </div>
  );
};
export default ToggleSwitch;
