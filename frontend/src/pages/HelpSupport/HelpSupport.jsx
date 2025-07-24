import React from 'react';
import './HelpSupport.css';
import { Link } from 'react-router-dom';

const HelpSupport = () => {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>

      <section className="help-section">
        <h2>Need Immediate Help?</h2>
        <p>If your issue is urgent (e.g. wrong or missing order), please use our live chat or call us at <strong>1800-123-MUNCH</strong>.</p>
      </section>

      <section className="help-section">
        <h2>Common Topics</h2>
        <ul>
          <li><Link to="/faqs">📄 Frequently Asked Questions</Link></li>
          <li><Link to="/report">📝 Report a Problem</Link></li>
          <li><Link to="/privacy-policy">🔐 Privacy & Data Protection</Link></li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Contact Us</h2>
        <p>Still stuck? Our support team is here for you:</p>
        <ul className="contact-methods">
          <li><strong>Email:</strong> support@munchopia.com</li>
          <li><strong>Phone:</strong> +91 98765 43210 (9AM - 11PM IST)</li>
          <li><strong>Live Chat:</strong> Available on all pages via the floating chat icon.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Feedback</h2>
        <p>Help us improve!</p>
        <Link to="/feedback" className="feedback-link">📝 Leave Feedback</Link>

      </section>
    </div>
  );
};

export default HelpSupport;
