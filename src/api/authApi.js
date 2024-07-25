import axios from 'axios';

const API_URL = 'https://productapp-json-server.onrender.com/auth';

export const login = async (email, password) => {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    return res.data;
};

export const register = async (email, password) => {
    const res = await axios.post(`${API_URL}/register`, { email, password });
    return res.data;
};
