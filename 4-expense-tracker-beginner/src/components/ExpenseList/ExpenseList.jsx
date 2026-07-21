import styles from "./ExpenseList.module.css";
import Expense from "../Expense/Expense";
const ExpenseList = ({ expenseList }) => {
  return (
    <div className={styles.expenseList}>
      <div className={styles.listHeader}>
        <span>Title</span>
        <span>Amount</span>
        <span>Date</span>
        <span>Category</span>
        <span>Actions</span>
      </div>
      <ul>
        {expenseList.map((expense) => (
          <Expense expense={expense} key={expense.id} />
        ))}
      </ul>
    </div>
  );
};
export default ExpenseList;
