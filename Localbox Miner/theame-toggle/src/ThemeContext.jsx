import React, { createContext, useState } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
  },
  dark: {
    background: '#000000',
    color: '#ffffff',
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

// Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}  {/* Noted:- children mean app.jsx*/}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
