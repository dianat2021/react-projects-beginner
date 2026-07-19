import styles from "./ExpenseForm.module.css";
const ExpenseForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label htmlFor="title">Expense title</label>
          <input
            type="text"
            name="title"
            id="title"
            className={styles.formInput}
            placeholder="e.g. bus ticket"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="amount">Expense amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className={styles.formInput}
            placeholder="e.g. 45 "
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="date">Expense date</label>
          <input
            type="date"
            name="date"
            id="date"
            className={styles.formInput}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="category">Expense category</label>
          <select name="category" id="category" className={styles.formSelect}>
            <option value="">Select expense category</option>
            <option value="groceries">Groceries</option>
            <option value="transportation">Transportation</option>
            <option value="clothing">Clothing</option>
            <option value="bills">Bills</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>
        Add expense
      </button>
    </form>
  );
};
export default ExpenseForm;
