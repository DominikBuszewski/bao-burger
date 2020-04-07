import React from "react";
import "./contact.styles.scss";

const ContactPage = () => (
  <div className="contact-page">
    <div className="phone">Phone number: 1231234412</div>
    <div className="address">Address: Zugmunta starego 123, Szczebrzeszyce</div>
    <form className="contact-form">
      <label>Name</label>
      <input placeholder="Name" />
      <label>Email</label>
      <input placeholder="Email" />
      <label>Topic</label>
      <input placeholder="Topic" />
      <div className="message"></div>
    </form>
  </div>
);
export default ContactPage;
