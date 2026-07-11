import styles from "./BookingForm.module.css";
const BookingForm = () => {
  return (
    <div className={styles.formWrapper}>
      <form>
        {/* Full name input ----------*/}
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="e.g. John Smith"
          />
        </div>
        {/* Email input ----------*/}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. John.Smith@gmail.com"
          />
        </div>
        {/* Phone number ----------*/}
        <div>
          <label htmlFor="phone">Phone number</label>
          <input type="tel" name="phone" id="phone" placeholder="12345678" />
        </div>
        {/* Date input ----------*/}
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
        </div>
        {/* Time input ----------*/}
        <div>
          <label htmlFor="time">Time</label>
          <input type="time" name="time" id="time" />
        </div>
        {/* Guest number input ----------*/}
        <div>
          <label htmlFor="guestNumber">Number of guests</label>
          <input type="number" name="guestNumber" id="guestNumber" min={1} />
        </div>
        <button type="submit">Book table</button>
      </form>
    </div>
  );
};
export default BookingForm;
