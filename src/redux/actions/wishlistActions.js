import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actionTypes/wishlistTypes"
import { addToWishlist as addToWishlistApi, removeFromWishlist as removeFromWishlistApi } from '../../api/wishListApi';

export const addToWishlist = (product) => async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
        await addToWishlistApi(product, token);
        dispatch({ type: ADD_TO_WISHLIST, payload: product });
    } catch (error) {
        console.error('Error adding to wishlist:', error);
    }
};

export const removeFromWishlist = (productId) => async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
        await removeFromWishlistApi(productId, token);
        dispatch({ type: REMOVE_FROM_WISHLIST, payload: productId });
    } catch (error) {
        console.error('Error removing from wishlist:', error);
    }
};