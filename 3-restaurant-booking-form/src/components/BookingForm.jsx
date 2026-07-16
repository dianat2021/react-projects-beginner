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
  const [bookingErrors, setBookingErrors] = useState({});

  const handleChange = (e) => {
    setBookingData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBookingErrors((prev) => ({ ...prev, [`${e.target.name}Error`]: "" }));
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
        emailError: "Enter you email address",
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

  return (
    <div className={styles.formWrapper}>
      <form>
        {/* Full name input ----------*/}
        <div>
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="e.g. John Smith"
            onChange={handleChange}
            value={bookingData.fullName}
            onBlur={handleFormValidation}
          />
          {bookingErrors.fullNameError && <p>{bookingErrors.fullNameError}</p>}
        </div>
        {/* Email input ----------*/}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. John.Smith@gmail.com"
            onChange={handleChange}
            value={bookingData.email}
            onBlur={handleFormValidation}
          />
          {bookingErrors.emailError && <p>{bookingErrors.emailError}</p>}
        </div>
        {/* Phone number ----------*/}
        <div>
          <label htmlFor="phoneNumber">Phone number</label>

          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="12345678"
            onChange={handleChange}
            value={bookingData.phoneNumber}
            onBlur={handleFormValidation}
          />
          {bookingErrors.phoneNumberError && (
            <p>{bookingErrors.phoneNumberError}</p>
          )}
        </div>
        {/* Date input ----------*/}
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
            value={bookingData.date}
            onBlur={handleFormValidation}
          />
          {bookingErrors.dateError && <p>{bookingErrors.dateError}</p>}
        </div>
        {/* Time input ----------*/}
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            id="time"
            onChange={handleChange}
            value={bookingData.time}
            onBlur={handleFormValidation}
          />
          {bookingErrors.timeError && <p>{bookingErrors.timeError}</p>}
        </div>
        {/* Guest number input ----------*/}
        <div>
          <label htmlFor="guestNumber">Number of guests</label>

          <input
            type="number"
            name="guestNumber"
            id="guestNumber"
            min={1}
            onChange={handleChange}
            value={bookingData.guestNumber || ""}
            onBlur={handleFormValidation}
          />
          {bookingErrors.guestNumberError && (
            <p>{bookingErrors.guestNumberError}</p>
          )}
        </div>
        <button type="submit">Book table</button>
      </form>
    </div>
  );
};
export default BookingForm;
