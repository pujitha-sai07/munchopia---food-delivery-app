import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { MoodContext } from '../../context/MoodContext';

const Header = () => {
  const { mood } = useContext(MoodContext);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const moodMessages = {
    happy: "Welcome! 😊",
    sad: "Hope your day gets better 😔",
    angry: "Take a breath 😠",
    romantic: "Love is in the air 💖",
    chill: "Relax and explore 😎",
    lazy: "No rush 😴",
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>{greeting}, foodie!</h2>
        <p>{moodMessages[mood] || "Welcome to Munchopia!"}</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

