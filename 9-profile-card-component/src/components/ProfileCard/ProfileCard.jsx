import styles from "./ProfileCard.module.css";
const ProfileCard = () => {
  return (
    <div className={styles.profileCardWrapper}>
      <img
        src="profile.jpg"
        alt="Profile card image"
        className={styles.image}
      />
      <div className={styles.row1}>
        <h2 className={styles.name}>John Smith</h2>
        <h3 className={styles.role}>Full-Stack Developer</h3>
      </div>
      <div className={styles.row2}>
        <p className={styles.location}>Oslo, Norway</p>
        <p className={styles.email}>john@email.com</p>
      </div>
      <div className={styles.linksWrapper}>
        <a href="#" className={styles.link}>
          GitHub
        </a>
        <a href="#" className={styles.link}>
          LinkedIn
        </a>
      </div>
    </div>
  );
};
export default ProfileCard;
