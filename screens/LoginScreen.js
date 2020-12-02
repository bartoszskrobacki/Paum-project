import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inputs from "../components/Inputs";
import Card from "../components/Card";
import firebase from "firebase";

import {loginAction} from "../actions/loginAction";
import {connect} from "react-redux";


const LoginScreen = props => {

    const loginUser = (login, password) => {
        try{
            firebase.auth().signInWithEmailAndPassword(login, password).then(function () {
                props.loginAction(login);
            })
        }
        catch (e) {
            Alert.alert('Wrong login or password', 'Try to insert your data one more time', [{text:'Okay',style: 'destructive'}]);
        }
    };

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

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
                <Inputs placeholder="Login" onChangeText={loginInputHandler} value={login}/>
            <Inputs placeholder="Hasło" secureTextEntry textContentType="password" onChangeText={passwordInputHandler} value={password}/>
            <Button style={styles.loginButton} title='Login' color='#4d4d4d'  onPress ={()=>{  loginUser(login, password)}}/>
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
    login: state.userState
}
}

export default connect (mapStateToProps,{loginAction})(LoginScreen);