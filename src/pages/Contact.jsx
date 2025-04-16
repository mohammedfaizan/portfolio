import React from "react";
import "../styles/main.css";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="simple-contact card">
          <p>
            Want to get in touch? Feel free to drop an email —
            <br />
            <a href="mailto:faizan1999.in@gmail.com" className="email-link">
              faizan1999.in@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
