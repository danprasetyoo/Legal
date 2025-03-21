// src/components/common/Card.jsx
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white p-6 rounded shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
