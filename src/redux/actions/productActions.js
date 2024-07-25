import { FILTER_PRODUCTS, SET_PRODUCTS } from "../actionTypes/productTypes";
import { fetchProducts as fetchProductsApi } from '../../api/productApi';

export const getProducts = () => async (dispatch) => {
    try {
        const res = await fetchProductsApi();
        dispatch({ type: SET_PRODUCTS, payload: res });
    } catch (error) {
        console.error(error);
    }
};

export const filterProducts = (q) => {
    return { type: FILTER_PRODUCTS, payload: q };
}