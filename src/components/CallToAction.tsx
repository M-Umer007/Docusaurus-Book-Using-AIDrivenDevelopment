import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.cta}>
      <h2>Ready to Read?</h2>
      <button>Get the Book</button>
    </div>
  );
};

export default CallToAction;
