import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(form);
    setShowSuccess(true);
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="feedback-container">
      <h1>We'd love your feedback!</h1>
      <p>Tell us what you think and help us improve your experience.</p>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          rows="6"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>

      {showSuccess && (
        <div className="success-toast">
          🎉 Thank you for your feedback!
        </div>
      )}
    </div>
  );
};

export default Feedback;
