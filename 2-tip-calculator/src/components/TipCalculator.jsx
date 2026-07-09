import { useState } from "react";
import styles from "./TipCalculator.module.css";
const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("");
  const [selectedTip, setSelectedTip] = useState(0);
  const [isAmountValid, setIsAmountValid] = useState(true);

  const handleBillAmount = (e) => {
    const value = e.target.value;
    if (value !== "" && Number(value) <= 0) {
      setIsAmountValid(false);
    } else {
      setIsAmountValid(true);
    }
    setBillAmount(value);
  };
  const handleReset = () => {
    setBillAmount("");
    setSelectedTip(0);
    setIsAmountValid(true);
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
          placeholder="Enter the bill amount"
          min="1"
        />
        {!isAmountValid && (
          <p className={styles.errorParagraph}>
            Bill amount must be greater than 0
          </p>
        )}
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
        {isAmountValid && (
          <>
            <p>
              <span>Tip amount:</span>
              <span>
                ${((Number(billAmount) * selectedTip) / 100).toFixed(2)}
              </span>
            </p>
            <p>
              <span>Total amount:</span>
              <span>
                $
                {(
                  Number(billAmount) +
                  (Number(billAmount) * selectedTip) / 100
                ).toFixed(2)}
              </span>
            </p>
          </>
        )}
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
export default TipCalculator;
