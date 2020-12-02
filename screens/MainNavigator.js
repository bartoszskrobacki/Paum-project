import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from "react-redux";

import {NavigationContainer} from "@react-navigation/native";

import LoginScreen from "./LoginScreen";
import MenuWaiterScreen from "./waiterScreens/MenuWaiterScreen";


import {createStackNavigator} from "@react-navigation/stack";
import MenuChefScreen from "./chefScreens/MenuChefScreen";
import ChooseTableScreen from "./waiterScreens/ChooseTableScreen";
import OrdersWaiterScreen from "./waiterScreens/OrdersWaiterScreen";
import ListOfDishesScreen from "./waiterScreens/ListOfDishesScreen";


const Stack = createStackNavigator();

const MainNavigator = props => {
    return(
        <NavigationContainer >

                {props.login.isLoggedIn === false ? (
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
                    </Stack.Navigator>)
                    : (
                        props.login.email === 'Barti@interia.eu' ? (
                    <Stack.Navigator>
                        <Stack.Screen name="MenuWaiter" component={MenuWaiterScreen} />
                        <Stack.Screen name="ChooseTable" component={ChooseTableScreen} />
                        <Stack.Screen name="OrderWaiter" component={OrdersWaiterScreen} />
                        <Stack.Screen name="ListWaiter" component={ListOfDishesScreen} />
                    </Stack.Navigator>)
                            :
                            (
                            <Stack.Navigator>
                                <Stack.Screen name="MenuChef" component={MenuChefScreen} />
                            </Stack.Navigator>
                            )
                    )}

        </NavigationContainer>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center'
    },
    Card: {
        marginTop: 20,
        width: '90%'
    },
    menuOptionContainer:{
        alignItems: 'center',
        padding: 20,

    },
    textStyle:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

function  mapStateToProps(state) {
    return{
        login: state.userState
    }
}

export default connect(mapStateToProps)(MainNavigator);