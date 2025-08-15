import React from 'react';

export const validateLogin = ({ username, password }) => {
  if (!username || !password) {
    return 'Username and password are required';
  }
  if (username.length < 3) {
    return 'Username must be at least 3 characters long';
  }
  return null;
};

const LoginValidator = ({ username, password }) => {
  const validationMessage = validateLogin({ username, password });

  return <div>{validationMessage && <p>{validationMessage}</p>}</div>;
};

export default LoginValidator;
