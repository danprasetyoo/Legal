import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

export default {
    login,
};