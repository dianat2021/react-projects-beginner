import Task from "../Task/Task";
import styles from "./TaskList.module.css";
const TaskList = ({ taskList }) => {
  return (
    <>
      <div className={styles.taskListWrapper}>
        <div className={styles.taskListHeader}>
          <span className={styles.titleHeader}>Title</span>
          <span className={styles.dateHeader}>Date</span>
          <span className={styles.statusHeader}>Status</span>
          <span className={styles.controlsHeader}>Controls</span>
        </div>
        <ul className={styles.taskList}>
          {taskList.map((item) => (
            <Task key={item.id} task={item} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default TaskList;
