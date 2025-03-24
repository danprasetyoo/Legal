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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin({ username, password });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        const data = await authService.login(username, password);
        localStorage.setItem('token', data.token);
        onLogin();
        alert(data.message);
      } catch (error) {
        setErrors({
          general: error.response?.data?.message || 'Network error',
        });
      } finally {
        setIsLoading(false);
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
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Card>
  );
};

export default LoginView;
