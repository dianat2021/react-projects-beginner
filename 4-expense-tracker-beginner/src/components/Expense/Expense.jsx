import { useState } from "react";
import styles from "./Expense.module.css";
import EditModal from "../EditModal/EditModal";
import EditForm from "../EditForm/EditForm";
const Expense = ({ expense, setExpenseList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { id, title, amount, date, category } = expense;

  const handleDelete = () => {
    setExpenseList((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <li className={styles.expenseItem}>
        <span className={styles.expenseTitle}>{title}</span>
        <span className={styles.expenseAmount}>{amount}</span>
        <span className={styles.expenseDate}>{date}</span>
        <span className={styles.expenseCategory}>{category}</span>
        <span className={styles.expenseActions}>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
          <button
            className={styles.editButton}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </span>
      </li>
      {isEditing && (
        <EditModal>
          <EditForm
            expense={expense}
            setIsEditing={setIsEditing}
            setExpenseList={setExpenseList}
          />
        </EditModal>
      )}
    </>
  );
};
export default Expense;
