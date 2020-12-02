import { LOGIN_USER} from "./types";

export const loginAction = (email) => {


    return(dispatch) => {
        dispatch({
            type: LOGIN_USER,
            payload: email
        })
    }

};

