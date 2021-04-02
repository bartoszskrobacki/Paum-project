import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import MenuWaiterScreen from "./screens/waiterScreens/MenuWaiterScreen";
import MenuChefScreen from "./screens/chefScreens/MenuChefScreen";


import {firebaseConfig} from "./config";


import {store} from "./store";
import {Provider} from "react-redux";
import {selectIdValue} from "@reduxjs/toolkit/src/entities/utils";
import MainNavigator from "./screens/MainNavigator";

import {reduxFirestore, getFirestore, createFirestoreInstance} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";

const Stack = createStackNavigator();
import firebase from './config'
import 'firebase/firestore';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};



export default function App() {

  return (
    <Provider store={store} >
      <ReactReduxFirebaseProvider {...rrfProps}>
    <MainNavigator />
      </ReactReduxFirebaseProvider>
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