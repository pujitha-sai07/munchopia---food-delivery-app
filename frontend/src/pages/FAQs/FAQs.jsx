import React, { useState } from 'react';
import './FAQs.css';

const FAQ_DATA = [
  {
    question: "How do I place an order on Munchopia?",
    answer:
      "Browse through our menu, add items to your cart, and proceed to checkout. You’ll need to log in or sign up to complete the order.",
  },
  {
    question: "What are the delivery hours?",
    answer:
      "We deliver every day from 9 AM to 11 PM. Orders outside these hours are scheduled for the next slot.",
  },
  {
    question: "Can I cancel or change my order?",
    answer:
      "Yes, within 5 minutes of placing the order from your Orders page. After that, the food may already be in preparation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, UPI, net banking, and COD (Cash on Delivery) in supported areas.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Email us at support@munchopia.com or use in-app live chat during delivery hours.",
  },
  {
    question: "Do you offer any loyalty or referral programs?",
    answer:
      "Yes! Earn points for every order and get discounts. Refer friends to earn free meals.",
  },
  {
    question: "My food arrived cold or damaged. What should I do?",
    answer:
      "Sorry about that! Please report it via the Report page or contact support within 30 minutes of delivery.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      {FAQ_DATA.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;

