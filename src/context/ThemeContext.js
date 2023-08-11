import { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState('light');
  const handleDarkModeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setDarkMode('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setDarkMode('light');
      localStorage.setItem('theme', 'light');
    }
  };
  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const value = {
    darkMode,
    handleDarkModeSwitch,
  };

  useEffect(() => {
    const html = window.document.documentElement;
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setDarkMode('dark');
    } else {
      html.classList.remove('dark');
      setDarkMode('light');
    }
  }, [darkMode]);
  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
}

export { DarkModeContext, DarkModeProvider };
