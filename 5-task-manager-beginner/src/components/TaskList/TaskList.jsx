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
        <ul className={styles.taskList}></ul>
      </div>
    </>
  );
};
export default TaskList;
