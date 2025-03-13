import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      <div className={isLightMode ? 'light-mode' : 'dark-mode'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
