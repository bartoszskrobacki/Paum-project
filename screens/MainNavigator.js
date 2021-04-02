import React from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {connect} from "react-redux";

import {NavigationContainer} from "@react-navigation/native";

import LoginScreen from "./LoginScreen";
import MenuWaiterScreen from "./waiterScreens/MenuWaiterScreen";


import {createStackNavigator} from "@react-navigation/stack";
import MenuChefScreen from "./chefScreens/MenuChefScreen";
import ChooseTableScreen from "./waiterScreens/ChooseTableScreen";
import OrdersWaiterScreen from "./waiterScreens/OrdersWaiterScreen";
import ListOfDishesScreen from "./waiterScreens/ListOfDishesScreen";
import {signOut} from "../actions/signOutAction";
import OrdersChefScreen from "./chefScreens/OrdersChefScreen";

const Stack = createStackNavigator();

const MainNavigator = props => {
console.log(props.profile);
    return(
        <NavigationContainer style={styles.screen}>
                {!props.auth.uid ? (
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
                    </Stack.Navigator>)
                    : (
                        props.auth.isLoaded && props.profile.role? (
                    props.profile.role === 'Waiter' ? (
                    <Stack.Navigator>
                        <Stack.Screen name="Menu Waiter" component={MenuWaiterScreen} options={{
                            headerRight: () => (
                                <Button
                                    onPress={() => props.signOut()}
                                    title="Log out"
                                />
                            ),
                        }} />
                        <Stack.Screen name="ChooseTable" component={ChooseTableScreen} />
                        <Stack.Screen name="OrderWaiter" component={OrdersWaiterScreen} />
                        <Stack.Screen name='Waiter List of Orders' component={ListOfDishesScreen} />
                    </Stack.Navigator>)
                            :
                            (
                            <Stack.Navigator>
                                <Stack.Screen name="MenuChef" component={MenuChefScreen} options={{
                                    headerRight: () => (
                                        <Button
                                            onPress={() => props.signOut()}
                                            title="Log out"
                                        />
                                    ),
                                }} />
                                <Stack.Screen name="OrdersChef" component={OrdersChefScreen} />
                            </Stack.Navigator>
                            )):
                            (<ActivityIndicator size="large" style={styles.indicator} />)
                    )}

        </NavigationContainer>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Card: {
        marginTop: 20,
        width: '90%'
    },
    menuOptionContainer:{
        alignItems: 'center',
        padding: 20,

    },
    indicator:{
        alignItems: 'center',
        marginTop: '100%'
    },
    textStyle:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

function  mapStateToProps(state) {
    return{
        login: state.authState,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps, {signOut})(MainNavigator);