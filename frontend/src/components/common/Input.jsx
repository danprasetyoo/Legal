// src/components/common/Input.jsx
import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 mb-4 w-full rounded transition duration-200 focus:border-blue-500 focus:outline-none ${className}`}
      required
    />
  );
};

export default Input;
