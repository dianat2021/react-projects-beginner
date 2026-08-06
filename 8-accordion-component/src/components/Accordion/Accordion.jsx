import { useState } from "react";
import styles from "./Accordion.module.css";
const Accordion = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.accordionHeader}>
        <button
          className={styles.accordionToggle}
          onClick={() => setIsActive((prev) => !prev)}
        >
          <span className={styles.accordionHeading}>What Is an Accordion?</span>
          <span className={styles.accordionToggleLogo}>
            <img
              src="/arrow-down.svg"
              alt="Accordion toggle arrow"
              className={`${styles.arrowIcon} ${isActive ? styles.activeIcon : ""}`}
            />
          </span>
        </button>
      </div>
      <div
        className={`${styles.accordionContent} ${isActive ? styles.accordionContentOpen : ""}`}
      >
        <div className={styles.accordionContentInner}>
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
    </div>
  );
};
export default Accordion;
