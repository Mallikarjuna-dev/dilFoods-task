import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actionTypes/cartTypes"
import { addToCart as addToCartApi, removeFromCart as removeFromCartApi, clearCart as clearCartApi } from '../../api/cartApi';

export const addCart = (product) => async (dispatch, getState) => {
    const token = getState().auth.token;
    if (!token) {
        alert('Please login to add products to the cart.');
        return;
    }
    try {
        await addToCartApi(product, token);
        dispatch({ type: ADD_TO_CART, payload: product });
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
};

export const removeCart = (productId) => async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
        await removeFromCartApi(productId, token);
        dispatch({ type: REMOVE_FROM_CART, payload: productId });
    } catch (error) {
        console.error('Error removing from cart:', error);
    }
};

export const clearCart = () => async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
        await clearCartApi(token);
        dispatch({ type: CLEAR_CART });
    } catch (error) {
        console.error('Error clearing cart:', error);
    }
};
