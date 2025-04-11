import React from 'react';
import LoginView from '../view/LoginView';

const Login = () => {
  const handleLogin = () => {};

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <LoginView onLogin={handleLogin} />
    </div>
  );
};

export default Login;
