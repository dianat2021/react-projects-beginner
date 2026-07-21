import styles from "./Expense.module.css";
const Expense = ({ expense }) => {
  const { title, amount, date, category } = expense;

  return (
    <li className={styles.expenseItem}>
      <span className={styles.expenseTitle}>{title}</span>
      <span className={styles.expenseAmount}>{amount}</span>
      <span className={styles.expenseDate}>{date}</span>
      <span className={styles.expenseCategory}>{category}</span>
      <span className={styles.expenseActions}>
        <button className={styles.deleteButton}>Delete</button>
        <button className={styles.editButton}>Edit</button>
      </span>
    </li>
  );
};
export default Expense;
