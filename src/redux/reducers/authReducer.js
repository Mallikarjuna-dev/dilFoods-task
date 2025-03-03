import { LOGIN_SUCCESS, LOGOUT } from "../actionTypes/authTypes"

const initialState = {
    token: localStorage.getItem("token") || null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
};
