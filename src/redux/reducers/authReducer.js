import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
} from "../actions/types"

const user = JSON.parse(sessionStorage.getItem("user"));

const initialState =user?{
    isLoggedIn: true,
    error: '',
    profleInfo: {user}
} :{
    isLoggedIn: false,
    error: '',
    profleInfo:''
};


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                profleInfo:action.payload,
                error:'',
                isLoggedIn: true
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                profleInfo:"",
                error:'',
                isLoggedIn: false
            };
        default:
            return state;
    }
};
