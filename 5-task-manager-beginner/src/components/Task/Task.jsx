import styles from "./Task.module.css";
const Task = ({ task, setTaskList }) => {
  const handleDelete = () => {
    setTaskList((prev) =>
      prev.filter((item) => {
        return item.id !== task.id;
      }),
    );
  };
  return (
    <li className={styles.taskItem}>
      <span className={styles.title}>{task.title}</span>
      <span className={styles.date}>{task.date}</span>
      <span className={styles.status}>{task.status}</span>
      <span className={styles.controls}>
        <button
          className={styles.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button className={styles.editButton} type="button">
          Edit
        </button>
        <button className={styles.toggleButton} type="button">
          Cross
        </button>
      </span>
    </li>
  );
};
export default Task;
