import { LOGIN_SUCCESS, LOGOUT } from "../actionTypes/authTypes";
import { login as loginApi, register as registerApi } from "../../api/authApi";

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await loginApi(email, password);
        localStorage.setItem("token", res.access_token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.access_token });
    } catch (error) {
        console.error(error)
    }
};

export const register = (email, password) => async (dispatch) => {
    try {
        const res = await registerApi(email, password);
        localStorage.setItem("token", res.access_token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.access_token });
    } catch (error) {
        console.error(error)
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
};