// src/components/common/Button.jsx
import React from 'react';

const Button = ({ children, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white p-2 rounded transition duration-200 hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
