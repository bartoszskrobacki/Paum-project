import {LOGIN_USER} from "../actions/types";


const initialState = {
        email: '',
        role: '',
        age: 0,
    isLoggedIn: false,

};

export default (state = initialState, action) => {

    switch(action.type) {

        case LOGIN_USER:
            return {
                email: action.payload,
                isLoggedIn: true
            };
        default:

            return state;
    };
}