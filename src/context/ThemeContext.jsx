"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getThemeFromStorage = () => {
  // Check if running in a browser environment
  if (typeof window !== "undefined") {
    // Access localStorage if available
    const value = localStorage.getItem("theme");
    // Return the stored value if available, otherwise return "light"
    return value || "light";
  }
  // Return the default theme if localStorage is not available
  return "light";
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getThemeFromStorage(); // Corrected: Invoking the function
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
