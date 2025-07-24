import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Last updated: July 21, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Munchopia! We care about your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our services.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, email, phone number, delivery address.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, items added to cart, interactions.</li>
          <li><strong>Cookies:</strong> To enhance your experience and keep you logged in.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To process orders and provide delivery updates.</li>
          <li>To personalize your experience and suggest popular dishes.</li>
          <li>To improve our services and website performance.</li>
          <li>To send promotional offers (you can opt out anytime).</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell your data. We only share it with trusted delivery partners and payment gateways required to fulfill your order securely.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          We use industry-standard encryption and secure servers to keep your data safe. However, no method is 100% secure, and we encourage you to protect your own login credentials.
        </p>
      </section>

      <section>
        <h2>6. Your Choices</h2>
        <ul>
          <li>Update your profile at any time from your account settings.</li>
          <li>Unsubscribe from emails via the unsubscribe link.</li>
          <li>Delete your account by contacting our support team.</li>
        </ul>
      </section>

      <section>
        <h2>7. Children’s Privacy</h2>
        <p>
          Munchopia does not knowingly collect data from children under 13. If we become aware of such data, we will delete it immediately.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We'll notify you of significant changes via email or app notification.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this policy, feel free to email us at <strong>privacy@munchopia.com</strong>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
