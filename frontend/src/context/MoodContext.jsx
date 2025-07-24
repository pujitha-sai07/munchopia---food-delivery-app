import { createContext, useState } from "react";

export const MoodContext = createContext();

const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState("happy");

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export default MoodProvider;
