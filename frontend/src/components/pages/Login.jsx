// src/components/pages/Login.jsx
import React from 'react';
import LoginView from '../view/LoginView';

const Login = () => {
  const handleLogin = () => {
    // Redirect to dashboard or perform another action
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <LoginView onLogin={handleLogin} />
    </div>
  );
};

export default Login;
