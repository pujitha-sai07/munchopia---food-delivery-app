import React, { useContext, useState } from "react";
import { MoodContext } from "../../context/MoodContext";
import "./MoodSelector.css";

const moods = [
  { value: "happy", label: "😊 Happy" },
  { value: "sad", label: "😔 Sad" },
  { value: "angry", label: "😠 Angry" },
  { value: "romantic", label: "💖 Romantic" },
  { value: "chill", label: "😎 Chill" },
  { value: "lazy", label: "😴 Lazy" },
];

const MoodSelector = () => {
  const { mood, setMood } = useContext(MoodContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setMood(value);
    setIsOpen(false);
  };

  const selectedLabel = moods.find((m) => m.value === mood)?.label || "Select Mood";

  return (
    <div className="custom-dropdown">
      <label>Choose Your Mood:</label>
      <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLabel}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {moods.map((m) => (
            <li
              key={m.value}
              className={`dropdown-item ${mood === m.value ? "selected" : ""}`}
              onClick={() => handleSelect(m.value)}
            >
              {m.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoodSelector;
