import React from 'react';
import { LINKEDIN_URL } from '../constants/social';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <div className="contact-row">
          <span className="contact-label">Location</span>
          <span className="contact-value">Andhra Pradesh, India</span>
        </div>
        <div className="contact-row">
          <span className="contact-label">Phone</span>
          <a href="tel:+917093165020" className="contact-value contact-value--link">
            +91 70931 65020
          </a>
        </div>
        <div className="contact-row">
          <span className="contact-label">Email</span>
          <a
            href="mailto:sasikumarkuppam02754@gmail.com"
            className="contact-value contact-value--link"
          >
            sasikumarkuppam02754@gmail.com
          </a>
        </div>
        <div className="contact-row">
          <span className="contact-label">LinkedIn</span>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value contact-value--link"
          >
            sasi-kumar-kuppam
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
