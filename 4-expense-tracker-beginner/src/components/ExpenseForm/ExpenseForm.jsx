import { useState } from "react";
import styles from "./ExpenseForm.module.css";
const ExpenseForm = ({ setExpenseList }) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...expenseData,
      id: crypto.randomUUID(),
    };
    setExpenseList((prev) => [...prev, newExpense]);
    setExpenseData({
      title: "",
      amount: "",
      date: "",
      category: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label htmlFor="title">Expense title</label>
          <input
            type="text"
            name="title"
            id="title"
            className={styles.formInput}
            placeholder="e.g. bus ticket"
            onChange={handleChange}
            value={expenseData.title}
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
            onChange={handleChange}
            value={expenseData.amount}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="date">Expense date</label>
          <input
            type="date"
            name="date"
            id="date"
            className={styles.formInput}
            onChange={handleChange}
            value={expenseData.date}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="category">Expense category</label>
          <select
            name="category"
            id="category"
            className={styles.formSelect}
            onChange={handleChange}
            value={expenseData.category}
          >
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
