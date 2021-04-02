import {LOGIN_USER, LOGIN_ERROR, LOGOUT_SUCCESS} from "./types";

import {Alert} from "react-native";

export const authAction = (login, password) => {

    return(dispatch, getState, {getFirebase}) => {
        const firebase  = getFirebase();
        firebase.auth().signInWithEmailAndPassword(login, password).then(() => {
            dispatch({
                type: LOGIN_USER,
                payload: login
            })
        }).catch(()=> {
            Alert.alert('Wrong login or password', 'Try to insert your data one more time', [{text:'Okay',style: 'destructive'}]);
            dispatch({
                type: LOGIN_ERROR,
                payload: login
            })
        });



    }

};



