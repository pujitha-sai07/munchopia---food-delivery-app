import React from 'react';
import './Report.css';

const Report = () => {
  return (
    <div className="report-container">
      <h1>Report an Issue</h1>
      <p>If you're facing any problems with our website or services, please let us know below.</p>

      <form className="report-form">
        <label>
          Your Email:
          <input type="email" placeholder="example@email.com" required />
        </label>

        <label>
          Issue Description:
          <textarea placeholder="Describe the issue here..." rows={5} required />
        </label>

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default Report;
