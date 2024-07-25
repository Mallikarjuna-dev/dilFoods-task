import { FILTER_PRODUCTS, SET_PRODUCTS } from "../actionTypes/productTypes";


const initialState = {
    products: [],
    filteredItem: [],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                filteredItems: action.payload
            }
        case FILTER_PRODUCTS:
            return {
                ...state,
                filteredItems: state.items.filter(product => product.name.toLowerCase().includes(action.payload.toLowerCase())),
            };
        default:
            return state;
    }
}