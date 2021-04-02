import {LOGIN_USER, LOGIN_ERROR, LOGOUT_SUCCESS, SIGN_UP_SUCCESS, SIGN_UP_ERROR} from "../actions/types";


const initialState = {
    isLoggedIn: false,

};

export default (state = initialState, action) => {

    switch(action.type) {

        case LOGIN_USER:
            return {
                ...state,
                email: action.payload,
                isLoggedIn: true
            };
        case LOGIN_ERROR:
            return {
                email: action.payload
            };
        case LOGOUT_SUCCESS:
            console.log(state.isLoggedIn);
            return {
                ...state,
                isLoggedIn: false
            };
        case SIGN_UP_SUCCESS:
            console.log('sign up success');
            return {
                ...state
            };
        case SIGN_UP_ERROR:
            console.log('sign up error');
            return {

                ...state
            }

        default:
            return state;
    };
}