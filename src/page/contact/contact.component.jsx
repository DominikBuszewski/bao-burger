import React from "react";
import "./contact.styles.scss";

const ContactPage = () => (
  <div className="contact-page">
    <div className="contact-data">
      <div className="phone">Phone number: 1231234412</div>
      <div className="address">
        Address: Zugmunta starego 123, Szczebrzeszyce
      </div>
    </div>
    <div className="schedule-table-container">
      <div className="schedule-table"></div>
    </div>
    <form className="contact-form">
      <label>Name</label>
      <input placeholder="Type your name" />
      <label>Email</label>
      <input placeholder="Type your email" />
      <label>Topic</label>
      <input placeholder="..." />
      <div className="message"></div>
    </form>
  </div>
);
export default ContactPage;
