import { useState } from "react";
import styles from "./BookingForm.module.css";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    guestNumber: null,
  });
  const [bookingErrors, setBookingErrors] = useState({
    fullNameError: "",
    emailError: "",
    phoneNumberError: "",
    dateError: "",
    timeError: "",
    guestNumberError: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setBookingData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBookingErrors((prev) => ({ ...prev, [`${e.target.name}Error`]: "" }));
    setIsSubmitted(false);
  };

  const handleFormValidation = (e) => {
    const { name, value } = e.target;
    // Full name check
    if (name === "fullName" && !value)
      setBookingErrors((prev) => ({
        ...prev,
        fullNameError: "Enter your full name",
      }));
    // Email check
    if (name === "email" && !value) {
      setBookingErrors((prev) => ({
        ...prev,
        emailError: "Enter your email address",
      }));
    } else if (name === "email" && !emailRegex.test(value)) {
      setBookingErrors((prev) => ({
        ...prev,
        emailError: "Enter a valid email address",
      }));
    }
    // Phone number check
    if (name === "phoneNumber" && !value) {
      setBookingErrors((prev) => ({
        ...prev,
        phoneNumberError: "Enter your phone number",
      }));
    } else if (name === "phoneNumber" && value.length !== 8) {
      setBookingErrors((prev) => ({
        ...prev,
        phoneNumberError: "Phone number must be 8 digits",
      }));
    }
    // Date check
    if (name === "date" && !value)
      setBookingErrors((prev) => ({
        ...prev,
        dateError: "Select a date",
      }));
    // Time check
    if (name === "time" && !value)
      setBookingErrors((prev) => ({
        ...prev,
        timeError: "Select booking time",
      }));
    // Guest number check
    if (name === "guestNumber" && !value)
      setBookingErrors((prev) => ({
        ...prev,
        guestNumberError: "Select the number of guests",
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyFields = Object.values(bookingData).some((value) => !value);
    const hasErrors = Object.values(bookingErrors).some(
      (error) => error !== "",
    );

    if (hasEmptyFields || hasErrors) return;
    setIsSubmitted(true);
    setBookingData({
      fullName: "",
      email: "",
      phoneNumber: "",
      date: "",
      time: "",
      guestNumber: "",
    });
    setBookingErrors({
      fullNameError: "",
      emailError: "",
      phoneNumberError: "",
      dateError: "",
      timeError: "",
      guestNumberError: "",
    });
    console.log("submitted");
  };

  return (
    <>
      <header>
        <h1 className={styles.title}>Restaurant Booking Form</h1>
      </header>
      <main>
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Full name input ----------*/}
            <div className={styles.fieldContainer}>
              <label htmlFor="fullName" className={styles.label}>
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="e.g. John Smith"
                onChange={handleChange}
                value={bookingData.fullName}
                onBlur={handleFormValidation}
                className={styles.input}
              />
              {bookingErrors.fullNameError && (
                <p className={styles.errorParagraph}>
                  {bookingErrors.fullNameError}
                </p>
              )}
            </div>
            {/* Email input ----------*/}
            <div className={styles.fieldContainer}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. John.Smith@gmail.com"
                onChange={handleChange}
                value={bookingData.email}
                onBlur={handleFormValidation}
                className={styles.input}
              />
              {bookingErrors.emailError && (
                <p className={styles.errorParagraph}>
                  {bookingErrors.emailError}
                </p>
              )}
            </div>
            {/* Phone number ----------*/}
            <div className={styles.fieldContainer}>
              <label htmlFor="phoneNumber" className={styles.label}>
                Phone number
              </label>

              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="12345678"
                onChange={handleChange}
                value={bookingData.phoneNumber}
                onBlur={handleFormValidation}
                className={styles.input}
              />
              {bookingErrors.phoneNumberError && (
                <p className={styles.errorParagraph}>
                  {bookingErrors.phoneNumberError}
                </p>
              )}
            </div>
            {/* Date input ----------*/}
            <div className={styles.fieldContainer}>
              <label htmlFor="date" className={styles.label}>
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                onChange={handleChange}
                value={bookingData.date}
                onBlur={handleFormValidation}
                className={styles.input}
              />
              {bookingErrors.dateError && (
                <p className={styles.errorParagraph}>
                  {bookingErrors.dateError}
                </p>
              )}
            </div>
            {/* Time input ----------*/}
            <div className={styles.fieldContainer}>
              <label htmlFor="time" className={styles.label}>
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                onChange={handleChange}
                value={bookingData.time}
                onBlur={handleFormValidation}
                className={styles.input}
              />
              {bookingErrors.timeError && (
                <p className={styles.errorParagraph}>
                  {bookingErrors.timeError}
                </p>
              )}
            </div>
            {/* Guest number input ----------*/}
            <div className={styles.fieldContainer}>
              <label htmlFor="guestNumber" className={styles.label}>
                Number of guests
              </label>

              <input
                type="number"
                name="guestNumber"
                id="guestNumber"
                min={1}
                onChange={handleChange}
                placeholder="e.g. 4"
                value={bookingData.guestNumber || ""}
                onBlur={handleFormValidation}
                className={styles.input}
              />
              {bookingErrors.guestNumberError && (
                <p className={styles.errorParagraph}>
                  {bookingErrors.guestNumberError}
                </p>
              )}
            </div>
            <button type="submit" className={styles.submitButton}>
              Book table
            </button>
            {isSubmitted && (
              <p className={styles.submitMessage}>
                Booking was registered successfully!
              </p>
            )}
          </form>
        </div>
      </main>
    </>
  );
};
export default BookingForm;
