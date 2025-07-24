import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();
  const pathname = location.pathname;



  const isCartPage = pathname === "/cart";
  const isHomePage = pathname === "/";

  const [section, setSection] = useState("home");

  useEffect(() => {
    if (!isHomePage) setSection("");
  }, [isHomePage]);

  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleSectionClick = (sectionId, sectionName) => {
  setSection(sectionName);
  if (!isHomePage) {
    navigate('/');
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300); 
  } else {
    scrollToSection(sectionId);
  }
};


  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setSection('home')} className={pathname === '/' && section === 'home' ? 'active' : ''}>home</Link>
        <a onClick={() => handleSectionClick('explore-menu', 'menu')} className={isHomePage && section === 'menu' ? 'active' : ''}>menu</a>
        <a onClick={() => handleSectionClick('app-download', 'mobile-app')} className={isHomePage && section === 'mobile-app' ? 'active' : ''}>mobile-app</a>
        <a onClick={() => handleSectionClick('footer', 'contact-us')} className={isHomePage && section === 'contact-us' ? 'active' : ''}>contact us</a>

      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt=""
              className={`basket-icon ${isCartPage ? "active-cart" : ""}`}
            />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
