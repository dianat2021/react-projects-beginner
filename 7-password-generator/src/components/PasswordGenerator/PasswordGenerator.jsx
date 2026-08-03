import { useState } from "react";
import styles from "./PasswordGenerator.module.css";
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleGeneratePass = (e) => {
    e.preventDefault();
    const randomPassLength = generateRandomNum(10, 12);
    let generatedPass = "";
    for (let i = 0; i < randomPassLength; i++) {
      const randomIndex = generateRandomNum(0, chars.length - 1);
      generatedPass += chars[randomIndex];
    }
    setPassword(generatedPass);
  };
  return (
    <div className={styles.wrapper}>
      <input
        type={password && !showPassword ? "password" : "text"}
        readOnly
        value={password || "Click generate to start"}
        className={styles.password}
      />
      <div className={styles.showPassWrapper}>
        <input
          type="checkbox"
          name="showPassword"
          id="showPassword"
          onChange={() => setShowPassword((prev) => !prev)}
        />
        <label htmlFor="showPassword">Show password</label>
      </div>
      <button
        type="button"
        className={styles.generateButton}
        onClick={handleGeneratePass}
      >
        Generate
      </button>
    </div>
  );
};
export default PasswordGenerator;
