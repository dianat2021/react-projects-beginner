import styles from "./ToggleSwitch.module.css";
const ToggleSwitch = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.toggleButton}>
        <span className={styles.toggleCircle}></span>
      </button>
    </div>
  );
};
export default ToggleSwitch;
