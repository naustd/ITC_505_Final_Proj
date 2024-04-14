import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
function Contact() {
  const [selectState, setSelectState] = React.useState(false);
  function sendHandler() {
    setSelectState(true);
  }
  function okHandler() {
    setSelectState(false);
  }
  return (
    <div className="fullContactPage">
      <section className="contact">
        <div className="content">
          <h1>Contact Us</h1>
          <p>
            Want to chat? Drop us a line and let's make some digital magic
            happen!
          </p>
        </div>
        <div className="containerContact">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#000000" }}
                />
              </div>
              <div className="text">
                <h4>Address</h4>
                <p>
                  Northern Arizona University, Flagstaff,
                  <br />
                  Arizona, 86001
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#000000" }} />
              </div>
              <div className="text">
                <h4>Phone</h4>
                <p>+1 985-789-89742</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#000000" }}
                />
              </div>
              <div className="text">
                <h4>Email Address</h4>
                <p>nikhil@nau.edu</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="" required="required" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                {selectState ? (
                  <div data-testid="alert" id="alert">
                    <h2>Thank You for Your Feedback</h2>
                    <p>We Consider Your Complaint.</p>
                    <button onClick={okHandler}>Ok</button>
                  </div>
                ) : (
                  <button onClick={sendHandler} type="Submit" className="sendBtn">
                    Send
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
