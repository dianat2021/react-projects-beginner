import styles from "./EditModal.module.css";
const EditModal = ({ children }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
export default EditModal;
