import { useState } from "react";
import styles from "./EditForm.module.css";
const EditForm = ({ expense, setIsEditing, setExpenseList }) => {
  const [editData, setEditData] = useState({
    title: expense.title,
    amount: expense.amount,
    date: expense.date,
    category: expense.category,
  });
  const [expenseErrors, setExpenseErrors] = useState({
    titleError: "",
    amountError: "",
    dateError: "",
    categoryError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
    setExpenseErrors((prev) => ({ ...prev, [`${name}Error`]: "" }));
  };

  const handleFormValidation = () => {
    const errors = {};

    if (!editData.title) errors.titleError = "Expense title is required";

    if (!editData.amount) {
      errors.amountError = "Expense amount is required";
    } else if (Number(editData.amount) <= 0) {
      errors.amountError = "Expense amount must be more than 0";
    }

    if (!editData.date) errors.dateError = "Expense date is required";

    if (!editData.category) errors.categoryError = "Select expense category";

    setExpenseErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleFormValidation()) return;
    setExpenseList((prev) =>
      prev.map((item) => {
        if (item.id === expense.id) {
          return {
            id: expense.id,
            ...editData,
          };
        }
        return item;
      }),
    );
    setIsEditing(false);
  };
  return (
    <>
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
              value={editData.title}
            />
            {expenseErrors.titleError && (
              <p className={styles.errorParagraph}>
                {expenseErrors.titleError}
              </p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="amount">Expense amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className={styles.formInput}
              placeholder="e.g. 45"
              onChange={handleChange}
              value={editData.amount}
            />
            {expenseErrors.amountError && (
              <p className={styles.errorParagraph}>
                {expenseErrors.amountError}
              </p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="date">Expense date</label>
            <input
              type="date"
              name="date"
              id="date"
              className={styles.formInput}
              onChange={handleChange}
              value={editData.date}
            />
            {expenseErrors.dateError && (
              <p className={styles.errorParagraph}>{expenseErrors.dateError}</p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="category">Expense category</label>
            <select
              name="category"
              id="category"
              className={styles.formSelect}
              onChange={handleChange}
              value={editData.category}
            >
              <option value="">Select expense category</option>
              <option value="groceries">Groceries</option>
              <option value="transportation">Transportation</option>
              <option value="clothing">Clothing</option>
              <option value="bills">Bills</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
            {expenseErrors.categoryError && (
              <p className={styles.errorParagraph}>
                {expenseErrors.categoryError}
              </p>
            )}
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Confirm edit
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
export default EditForm;
