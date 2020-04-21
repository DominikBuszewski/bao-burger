import React from "react";
import "./contact.styles.scss";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email-icon.svg";
const ContactPage = () => (
  <div className="contact-page">
    <div className="contact-data">
      <div className="schedule-table-container">
        <div className="schedule-table">
          <h2>Working hours</h2>
          <table>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>CLOSED</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>1pm-23pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>1pm-23pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>1pm-23pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>2pm-24pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>2pm-24pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>1pm-21pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <form className="contact-form">
        <h2>Leave us a message</h2>
        <label for="name">Name</label>
        <input placeholder="Type your name" type="text" />
        <label for="email">Email</label>
        <input placeholder="Type your email" type="email" />
        <label for="topic">Topic</label>
        <input placeholder="Type your topic" type="text" />
        <textarea id="message" rows="7" cols="50" />
        <button type="submit" className="send-button">
          SEND
        </button>
      </form>
    </div>
    <div className="social-media-container">
      <div className="block social-media">
        <h2>Follow us on social media</h2>
        <div className="icons-container">
          <FacebookIcon className="social-icons" />
          <TwitterIcon className="social-icons" />
          <InstagramIcon className="social-icons" />
        </div>
      </div>
      <div className="block visit-us">
        <h2>Visit us!</h2>
        <p className="phone">Make reservation through phone: +48 543 234 255</p>
        <p className="address">Address: ul. Zugmunta Starego 123, Wrocław</p>
      </div>
      <div className="block newsletter">
        <h2>SIGN UP FOR NEWSLETTER</h2>
        <p>Don't worry. I won't spam you</p>
        <div className="email-container">
          <input placeholder="email address" type="email" />
          <EmailIcon className="email-icon" />
        </div>

        <p>Get new promotions every week</p>
      </div>
    </div>
  </div>
);
export default ContactPage;
