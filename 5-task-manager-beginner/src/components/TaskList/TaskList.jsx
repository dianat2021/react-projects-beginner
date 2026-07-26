import Task from "../Task/Task";
import styles from "./TaskList.module.css";
const TaskList = ({ taskList, setTaskList }) => {
  return (
    <div className={styles.taskListWrapper}>
      <div className={styles.taskListHeader}>
        <span className={styles.titleHeader}>Title</span>
        <span className={styles.dateHeader}>Date</span>
        <span className={styles.statusHeader}>Status</span>
        <span className={styles.controlsHeader}>Controls</span>
      </div>
      <ul className={styles.taskList}>
        {taskList.length === 0 ? (
          <p className={styles.emptyTaskList}>No tasks to display!</p>
        ) : (
          taskList.map((item) => (
            <Task key={item.id} task={item} setTaskList={setTaskList} />
          ))
        )}
      </ul>
    </div>
  );
};
export default TaskList;
