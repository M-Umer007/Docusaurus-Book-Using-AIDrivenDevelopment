import React from 'react';
import styles from './BookPreview.module.css';

const BookPreview = () => {
  return (
    <div className={styles.preview}>
      <h2>Book Preview</h2>
      <p>This is a preview of the book.</p>
    </div>
  );
};

export default BookPreview;
