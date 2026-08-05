import styles from "./Accordion.module.css";
const Accordion = () => {
  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.accordionHeader}>
        <button className={styles.accordionToggle}>
          <span className={styles.accordionHeading}>Text</span>
          <span className={styles.accordionToggleLogo}>Logo</span>
        </button>
      </div>
      <div className={styles.accordionContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum
          tempore, quod porro praesentium, odio sequi vero atque libero quam
          deleniti doloremque voluptate ad, rerum voluptas velit aut? Nostrum
          iure sapiente, provident sint omnis magnam quia. Mollitia, totam
          labore reprehenderit temporibus fugit nulla velit in iste quas
          impedit. Laboriosam, autem.
        </p>
      </div>
    </div>
  );
};
export default Accordion;
