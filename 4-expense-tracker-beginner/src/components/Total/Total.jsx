import styles from "./Total.module.css";
const Total = ({ expenseList }) => {
  return (
    <div className={styles.totalWrapper}>
      <span className={styles.label}>Total: </span>
      <span className={styles.total}>
        {expenseList
          .reduce((acc, cur) => {
            return (acc += Number(cur.amount));
          }, 0)
          .toFixed(2)}
      </span>
    </div>
  );
};
export default Total;
