import { useState } from "react";
import styles from "./TipCalculator.module.css";
const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);

  const handleBillAmount = (e) => {
    const value = Number(e.target.value);
    setBillAmount(value > 0 ? value : 0);
  };
  const handleReset = () => {
    setBillAmount(0);
    setSelectedTip(0);
  };
  return (
    <div className={styles.tipCalculatorWrapper}>
      <h1 className={styles.title}>Tip Calculator</h1>
      {/* Bill section */}
      <div className={styles.billContainer}>
        <label htmlFor="bill">Enter bill amount:</label>
        <input
          type="number"
          name="bill"
          id="bill"
          className={styles.billInput}
          onChange={handleBillAmount}
          value={billAmount}
        />
      </div>
      {/* Tip buttons */}
      <div className={styles.tipButtonsContainer}>
        <p>Select a tip percentage:</p>
        <button
          className={`${styles.tipOption} ${selectedTip === 10 ? styles.active : ""}`}
          onClick={() => setSelectedTip(10)}
        >
          10%
        </button>
        <button
          className={`${styles.tipOption} ${selectedTip === 15 ? styles.active : ""}`}
          onClick={() => setSelectedTip(15)}
        >
          15%
        </button>
        <button
          className={`${styles.tipOption} ${selectedTip === 20 ? styles.active : ""}`}
          onClick={() => setSelectedTip(20)}
        >
          20%
        </button>
        <button
          className={`${styles.tipOption} ${selectedTip === 25 ? styles.active : ""}`}
          onClick={() => setSelectedTip(25)}
        >
          25%
        </button>
      </div>
      {/* Tip results */}
      <div className={styles.tipResultContainer}>
        <p>Tip amount:{((billAmount * selectedTip) / 100).toFixed(2)}</p>
        <p>
          Total amount:
          {(billAmount + (billAmount * selectedTip) / 100).toFixed(2)}
        </p>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
export default TipCalculator;
