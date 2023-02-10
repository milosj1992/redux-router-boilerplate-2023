import {combineReducers} from 'redux';

import rentReducer from "./rentReducer";
import {authReducer} from "./authReducer";

export default combineReducers({
    rents: rentReducer,
    auth: authReducer
});
