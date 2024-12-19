import React from 'react';
import '../App.css';

const ContactUs = () => {
  return (
    <div className="main-container">
    <div className="Cquote">
        <h1>We would love to hear your feedback.</h1>
    </div>
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name:</label>
          <input className="form-input" type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email:</label>
          <input className="form-input" type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">Message:</label>
          <textarea className="form-textarea" id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;