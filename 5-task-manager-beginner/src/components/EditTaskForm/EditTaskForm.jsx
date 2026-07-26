import { useState } from "react";
import styles from "./EditTaskForm.module.css";
const EditTaskForm = ({ task, setTaskList, setIsEditing }) => {
  const [editedTask, setEditedTask] = useState({
    id: task.id,
    title: task.title,
    date: task.date,
    status: task.status,
  });
  const [editErrors, setEditErrors] = useState({});

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Validating the edit form
  const handleValidation = (e) => {
    const errors = {};
    if (!editedTask.title) errors.titleError = "Task title is required";
    if (!editedTask.date) errors.dateError = "Task date is required";
    if (!editedTask.status) errors.statusError = "Select task status";
    setEditErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidation()) return;
    setTaskList((prev) => {
      return prev.map((item) => {
        if (item.id === task.id) {
          return {
            ...editedTask,
          };
        }
        return item;
      });
    });
    setIsEditing(false);
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
          value={editedTask.title}
          onChange={handleEditChange}
        />
        {editErrors.titleError && (
          <p className={styles.formError}>{editErrors.titleError}</p>
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
          value={editedTask.date}
          onChange={handleEditChange}
        />
        {editErrors.dateError && (
          <p className={styles.formError}>{editErrors.dateError}</p>
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
          value={editedTask.status}
          onChange={handleEditChange}
        >
          <option value="">Select task status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        {editErrors.statusError && (
          <p className={styles.formError}>{editErrors.statusError}</p>
        )}
      </div>
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.submitButton}>
          Confirm edit
        </button>
        <button
          type="button"
          className={styles.cancelEditButton}
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default EditTaskForm;
