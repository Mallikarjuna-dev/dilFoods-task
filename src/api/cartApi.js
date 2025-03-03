import axios from 'axios';

const API_URL = 'https://productapp-json-server.onrender.com/cart';

export const addToCart = async (product, token) => {
    const response = await axios.post(API_URL, product, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const removeFromCart = async (productId, token) => {
    const response = await axios.delete(`${API_URL}/${productId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
