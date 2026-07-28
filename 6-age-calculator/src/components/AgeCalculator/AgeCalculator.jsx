import styles from "./AgeCalculator.module.css";
const AgeCalculator = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <label htmlFor="birthDate" className={styles.label}>
            Birthdate
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Calculate age
        </button>
      </form>
      <div className={styles.display}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          quis.
        </p>
      </div>
    </>
  );
};
export default AgeCalculator;
