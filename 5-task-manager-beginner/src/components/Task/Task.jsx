import styles from "./Task.module.css";
const Task = ({ task }) => {
  return (
    <li className={styles.taskItem}>
      <span className={styles.title}>{task.title}</span>
      <span className={styles.date}>{task.date}</span>
      <span className={styles.status}>{task.status}</span>
      <span className={styles.controls}>
        <button className={styles.deleteButton}>Delete</button>
        <button className={styles.editButton}>Edit</button>
        <button className={styles.toggleButton}>Cross</button>
      </span>
    </li>
  );
};
export default Task;
