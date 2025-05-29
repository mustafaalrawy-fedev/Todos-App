import { useState, useEffect } from 'react';

const useTheme = () => {
  // Initialize theme state with value from localStorage or default to 'light'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const htmlElement = document.documentElement; // Get the root HTML element
    // Remove conflicting dataset attribute logic
    htmlElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    htmlElement.classList.add(theme);
    // Save the current theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
};

export default useTheme;
