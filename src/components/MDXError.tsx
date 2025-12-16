import React from 'react';

interface MDXErrorProps {
  message?: string;
}

const MDXError: React.FC<MDXErrorProps> = ({ message = 'Content not found or malformed.' }) => {
  return (
    <div style={{ color: 'red', border: '1px solid red', padding: '10px', margin: '10px 0' }}>
      <h3>Error loading content:</h3>
      <p>{message}</p>
      <p>Please check the MDX file for correct syntax and availability.</p>
    </div>
  );
};

export default MDXError;
