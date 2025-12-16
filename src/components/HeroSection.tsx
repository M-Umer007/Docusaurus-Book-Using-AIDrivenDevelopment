import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h1>Book Title</h1>
      <p>Book Subtitle</p>
    </div>
  );
};

export default HeroSection;
