import { useState } from "react";
import styles from "./AgeCalculator.module.css";
const AgeCalculator = () => {
  // States
  const [birthDate, setBirthDate] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [age, setAge] = useState(null);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const selectedDate = new Date(birthDate);
    if (!handleValidation()) return;
    const ageInMil = today.getTime() - selectedDate.getTime();
    // Calculate years
    const years = Math.floor(ageInMil / (1000 * 60 * 60 * 24 * 365.25));
    // Calculate months
    const monthsDiff = today.getMonth() - selectedDate.getMonth();
    const months = monthsDiff < 0 ? monthsDiff + 12 : monthsDiff;
    // Calculate days
    const daysDiff = today.getDate() - selectedDate.getDate();
    const days = daysDiff < 0 ? daysDiff + 30 : daysDiff;
    setAge({
      years,
      months,
      days,
    });
    setBirthDate("");
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          {age
            ? `You are ${age.years} Years, ${age.months} months, and ${age.days} days old!`
            : "Enter your bithdate and press calculate age."}
        </p>
      </div>
    </>
  );
};
export default AgeCalculator;
