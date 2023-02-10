import {login} from "../api";

const loginService = (username, password) => {
    return login.post( "/",{
        user_name: username, user_password: password
    })
        .then((response) => {
            if (response.data && response.data.username) {
                sessionStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logoutService = () => {
    sessionStorage.removeItem("user");
};

export default {
    loginService,
    logoutService,
};
