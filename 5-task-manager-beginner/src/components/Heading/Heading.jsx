import styles from "./Heading.module.css";
const Heading = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Task Manager</h1>
    </header>
  );
};
export default Heading;
