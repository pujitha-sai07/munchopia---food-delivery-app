import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At Munchopia, we’re passionate about serving delicious food made
            with love and the freshest ingredients. Whether you're craving a
            quick bite or a hearty meal, our mission is to bring flavor and joy
            to every plate. Join us on a journey of taste that satisfies every
            craving and fits every lifestyle.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/report" className="footer-link">
                Report
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
             <li>
              <Link to="/faqs" className="footer-link">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/help" className="footer-link">
                Help & Support
              </Link>
            </li>

             <li>
              <Link to="/feedback" className="footer-link">
               Feedback Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8975780000</li>
            <li>munchopia@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />

      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Back to top
      </button>

      <p className="footer-copyright">
        Copyright 2025 © munchopia.com - All Right Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
