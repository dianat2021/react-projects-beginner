import { useState } from "react";
import styles from "./Task.module.css";
import EditModal from "../EditModal/EditModal";
import EditTaskForm from "../EditTaskForm/EditTaskForm";
const Task = ({ task, setTaskList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleDelete = () => {
    setTaskList((prev) =>
      prev.filter((item) => {
        return item.id !== task.id;
      }),
    );
  };

  const toggleStatus = () => {
    setTaskList((prev) =>
      prev.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            status: item.status === "completed" ? "pending" : "completed",
          };
        }
        return item;
      }),
    );
  };
  return (
    <>
      <li
        className={`${styles.taskItem} ${task.status === "completed" ? styles.completed : ""}`}
      >
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
          <button
            className={styles.editButton}
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className={styles.toggleButton}
            type="button"
            onClick={toggleStatus}
          >
            Cross
          </button>
        </span>
        {isEditing && (
          <EditModal>
            <EditTaskForm
              task={task}
              setTaskList={setTaskList}
              setIsEditing={setIsEditing}
            />
          </EditModal>
        )}
      </li>
    </>
  );
};
export default Task;
