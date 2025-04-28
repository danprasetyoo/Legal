import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLogin } from '../validators/LoginValidator';
import { login } from '../services/AuthServices';

const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateLogin({ username, password });
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      await login({ username, password });
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginView;
