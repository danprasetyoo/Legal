import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './components/pages/Login';
import AdminPage from './components/pages/AdminPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
