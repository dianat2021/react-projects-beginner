import { useState } from "react";
import styles from "./TaskForm.module.css";
const TaskForm = () => {
  // taskData state initialized with empty string to collect form data
  const [taskData, setTaskData] = useState({
    title: "",
    date: "",
    status: "",
  });
  // taskErros state initialized with empty string to collect form errors
  const [taskErrors, setTaskErrors] = useState({});

  // Chane handler to collect form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setTaskErrors((prev) => ({
      ...prev,
      [`${name}Error`]: "",
    }));
  };
  // Validating the form
  const handleValidation = (e) => {
    const errors = {};
    if (!taskData.title) errors.titleError = "Task title is required";
    if (!taskData.date) errors.dateError = "Task date is required";
    if (!taskData.status) errors.statusError = "Select task status";
    setTaskErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidation()) return;
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="title" className={styles.label}>
          Task title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="e.g. pay electricity bill (max 100 characters)"
          maxLength={100}
          className={styles.input}
          onChange={handleChange}
          value={taskData.title}
        />
        {taskErrors.titleError && (
          <p className={styles.formError}>{taskErrors.titleError}</p>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="date" className={styles.label}>
          Task date
        </label>

        <input
          type="date"
          name="date"
          id="date"
          className={styles.input}
          onChange={handleChange}
          value={taskData.date}
        />
        {taskErrors.dateError && (
          <p className={styles.formError}>{taskErrors.dateError}</p>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="status" className={styles.label}>
          Task status
        </label>

        <select
          name="status"
          id="status"
          className={styles.select}
          onChange={handleChange}
          value={taskData.status}
        >
          <option value="">Select task status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        {taskErrors.statusError && (
          <p className={styles.formError}>{taskErrors.statusError}</p>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
        Add task
      </button>
    </form>
  );
};
export default TaskForm;
