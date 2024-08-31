import React from 'react';
import { useTheme } from '../src';

const UseThemeExample: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ 
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px'
    }}>
      <h2>useTheme Example</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default UseThemeExample;