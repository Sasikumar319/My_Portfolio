// ContactSection.js
import React from 'react';
import './ContactSection.css'; // Import the CSS for styles

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>
      <p className="contact-subtitle">
        I’d love to hear from you — send a message or reach me through the info below.
      </p>

      <div className="contact-info">
      <div className="contact-card">
        <div className="icon-circle bg-cyan">📍</div>
        <span className="card-text">Andhra Pradesh, India</span>
      </div>

      <div className="contact-card">
        <div className="icon-circle bg-green">📞</div>
        <a href="tel:+917093165020" className="card-link">+91 70931 65020</a>
      </div>

      <div className="contact-card">
        <div className="icon-circle3 bg-purple">📧</div>
        <a href="mailto:sasikumarkuppam02754@gmail.com" className="card-link">
          sasikumarkuppam02754@gmail.com
        </a>
      </div>
    </div>
    </div>
  );
};

export default ContactSection;
