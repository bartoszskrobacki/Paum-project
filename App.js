import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import MenuWaiterScreen from "./screens/waiterScreens/MenuWaiterScreen";
import MenuChefScreen from "./screens/chefScreens/MenuChefScreen";

import firebase  from "firebase";
import {firebaseConfig} from "./config";


import {store,persistor} from "./store";
import {Provider} from "react-redux";
import {selectIdValue} from "@reduxjs/toolkit/src/entities/utils";
import MainNavigator from "./screens/MainNavigator";

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() {

  return (
    <Provider store={store} >
    <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*

 */