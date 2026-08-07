import { useState } from "react";
import styles from "./StarRating.module.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.starsWrapper}
        onMouseLeave={() => setHoverRating(0)}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            className={styles.star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
          >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              stroke="#f59e0b"
              fill={star <= (hoverRating || rating) ? "#f59e0b" : "none"}
              style={{ pointerEvents: "none" }}
            />
          </svg>
        ))}
      </div>
      <p className={styles.ratingText}>Select a rating</p>
    </div>
  );
};

export default StarRating;
