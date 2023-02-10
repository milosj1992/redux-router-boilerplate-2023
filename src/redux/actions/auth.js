import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from "./types"

import AuthService from "../../services/auth.service";

export const loginUser = (username, password) => (dispatch) => {
    return AuthService.loginService(username, password)
        .then(response => {
            if(response.username){
                dispatch({type: LOGIN_SUCCESS, payload: {user:response}});
            }
            else{
                dispatch({type: LOGIN_ERROR, payload: response});
            }
        })
        .catch(error => {
            dispatch({type: LOGIN_ERROR, payload: error});
        });
};

export const logoutUser = () => (dispatch) => {
    AuthService.logoutService();

    dispatch({
        type: LOGOUT,
    });
};
