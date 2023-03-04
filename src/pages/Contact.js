// Contact.js
import React from "react";

function Contact() {
  return (
    <div className="contact">
      <section className="hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            Get in touch with us to learn more about our financial services.
          </p>
        </div>
      </section>
      <section className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button className="btn-primary">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
