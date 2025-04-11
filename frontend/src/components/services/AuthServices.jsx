import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export default {
  login,
};
