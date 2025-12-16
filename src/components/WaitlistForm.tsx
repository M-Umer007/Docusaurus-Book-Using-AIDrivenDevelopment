import React, { useState } from 'react';
import styles from './WaitlistForm.module.css';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleJoinWaitlist = () => {
    if (!email) {
      setError('Email address cannot be empty.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    localStorage.setItem('waitlistEmail', email);
    alert('You have been added to the waitlist!');
    setEmail('');
    setError('');
  };

  return (
    <div className={styles.form}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (error) setError(''); // Clear error when user starts typing
        }}
      />
      <button onClick={handleJoinWaitlist}>Join Waitlist</button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default WaitlistForm;
