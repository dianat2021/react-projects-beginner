import { useState } from "react";
import styles from "./AgeCalculator.module.css";
const AgeCalculator = () => {
  // States
  const [birthDate, setBirthDate] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  // Handlers
  const handleChange = (e) => {
    setBirthDate(e.target.value);
    setBirthDateError("");
  };
  const handleValidation = () => {
    const today = Date.now();
    const selectedDate = new Date(birthDate);
    let error = "";
    if (!birthDate) {
      error = "Birthdate is required";
    } else if (selectedDate.getTime() > today) {
      error = "Selected date cannot be in the future";
    }
    setBirthDateError(error);
    return error === "";
  };
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
            onChange={handleChange}
            value={birthDate}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Calculate age
        </button>
        {birthDateError && (
          <p className={styles.errorParagraph}>{birthDateError}</p>
        )}
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
