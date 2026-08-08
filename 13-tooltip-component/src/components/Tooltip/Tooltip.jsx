import styles from "./Tooltip.module.css";
const Tooltip = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.createAccountBtn}>
        <div className={styles.tooltip}>Create an account</div>
        <img
          src="/add-icon.svg"
          alt="create an account icon"
          className={styles.accountIcon}
        />
      </button>
    </div>
  );
};
export default Tooltip;
