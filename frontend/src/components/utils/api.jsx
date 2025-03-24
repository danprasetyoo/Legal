import axios from 'axios';

export const API_URL = '/api';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
