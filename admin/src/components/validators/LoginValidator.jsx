import React from 'react';

export const validateLogin = ({ email, password }) => {
  if (!email || !password) {
    return 'Email and password are required';
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Invalid email format';
  }
  return null;
};

const LoginValidator = ({ email, password }) => {
  const validationMessage = validateLogin({ email, password });

  return <div>{validationMessage && <p>{validationMessage}</p>}</div>;
};

export default LoginValidator;
