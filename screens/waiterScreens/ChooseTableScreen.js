import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Card from "../../components/Card";


const ChooseTableScreen = props => {
    return(
        <View style={styles.screen} >
            <Card style={styles.Card}>
                <View style={styles.menuOptionContainer}>
                  <Button title='Table 1' onPress = {() => {props.navigation.navigate('OrderWaiter', {tableNumber: {name: "Table 1"}})}}/>
                </View>
            </Card>
            <Card style={styles.Card}>
                <View style={styles.menuOptionContainer}>
                    <Button title='Table 2' onPress = {() => {props.navigation.navigate('OrderWaiter', {tableNumber: {name: "Table 2"}})}} />
                </View>
            </Card>
            <Card style={styles.Card}>
                <View style={styles.menuOptionContainer}>
                    <Button title='Table 3' onPress = {() => {props.navigation.navigate('OrderWaiter', {tableNumber: {name: "Table 3"}})}} />
                </View>
            </Card>
            <Card style={styles.Card}>
                <View style={styles.menuOptionContainer}>
                    <Button title='Table 4' onPress = {() => {props.navigation.navigate('OrderWaiter',{tableNumber: {name: "Table 4"}})}}/>
                </View>
            </Card>
        </View>
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

export  default ChooseTableScreen;