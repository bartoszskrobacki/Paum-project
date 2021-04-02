import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inputs from "../components/Inputs";
import Card from "../components/Card";
import firebase from "firebase";
import {signUpAction} from "../actions/signUpAction";
import {authAction} from "../actions/authAction";
import {connect} from "react-redux";


const LoginScreen = props => {


    const user = {
        email: 'Barti@interia.eu',
        password: 'Oskar212!',
        firstName: 'Bartosz',
        lastName: 'Skrobacki',
        role: 'waiter',
    }

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const credentials = {login, password};
    const loginInputHandler = (enteredText) => {
        setLogin(enteredText);
    };

    const passwordInputHandler = (enteredText) => {
        setPassword(enteredText);
    };

    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen} >
        <Card>
            <View style={styles.loginContainer}>
                <Inputs placeholder="Email" onChangeText={loginInputHandler} value={login}/>
            <Inputs placeholder="Hasło" secureTextEntry textContentType="password" onChangeText={passwordInputHandler} value={password}/>
            <Button style={styles.loginButton} title='Login' color='#4d4d4d'  onPress ={()=>{  props.authAction(login, password)} }/>
        </View>
        </Card>
        </View>
        </TouchableWithoutFeedback>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    loginContainer:{
        alignItems: 'center',
        width: '90%'
    },
    loginButton:{
        fontSize: 20,
    }
});

function  mapStateToProps(state) {
return{
    login: state.authState
}
}

export default connect (mapStateToProps,{authAction, signUpAction})(LoginScreen);