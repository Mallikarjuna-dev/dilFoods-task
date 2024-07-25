import axios from 'axios';

const API_URL = 'https://productapp-json-server.onrender.com/wishlist';

export const addToWishlist = async (product, token) => {
    const response = await axios.post(API_URL, product, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const removeFromWishlist = async (productId, token) => {
    const response = await axios.delete(`${API_URL}/${productId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
