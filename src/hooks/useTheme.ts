import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

/**
 * A hook for managing theme switching in your application.
 *
 * @returns {Object} An object containing:
 *   - theme: The current theme ('light' or 'dark')
 *   - toggleTheme: A function to toggle between themes
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 *
 * return (
 *   <div className={theme}>
 *     <button onClick={toggleTheme}>Toggle Theme</button>
 *     Current theme: {theme}
 *   </div>
 * );
 */
const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;