import styles from "./PasswordGenerator.module.css";
const PasswordGenerator = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.password}>Click generate to start</p>
      <button type="button" className={styles.generateButton}>
        Generate
      </button>
    </div>
  );
};
export default PasswordGenerator;
