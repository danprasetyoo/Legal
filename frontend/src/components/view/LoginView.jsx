import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import authService from '../services/AuthServices';
import validateLogin from '../validators/loginValidator';
import Card from '../common/Card';

const LoginView = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateLogin({ username, password }));

    if (Object.keys(errors).length === 0) {
      try {
        const data = await authService.login(username, password);
        localStorage.setItem('token', data.token);
        onLogin();
      } catch {
        setErrors({ general: 'Invalid credentials' });
      }
    }
  };

  return (
    <Card className="max-w-sm mx-auto">
      <h1 className="text-lg font-bold mb-5">Login</h1>
      {errors.general && <p className="text-red-500 mb-2">{errors.general}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginView;
