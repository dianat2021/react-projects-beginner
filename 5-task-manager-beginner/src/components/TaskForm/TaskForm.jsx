import styles from "./TaskForm.module.css";
const TaskForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="title" className={styles.label}>
          Task title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="e.g. pay electricity bill"
          maxLength={100}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="date" className={styles.label}>
          Task date
        </label>
        <input type="date" name="date" id="date" className={styles.input} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="status" className={styles.label}>
          Task status
        </label>
        <select name="status" id="status" className={styles.select}>
          <option value="">Select task status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className={styles.submitButton}>
        Add task
      </button>
    </form>
  );
};
export default TaskForm;
