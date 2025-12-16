import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: '0%' }}></div>
    </div>
  );
};

export default ProgressBar;
