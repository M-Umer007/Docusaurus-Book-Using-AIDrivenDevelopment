import React from 'react';
import { useTheme } from './ThemeProvider';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.navigation}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default Navigation;
