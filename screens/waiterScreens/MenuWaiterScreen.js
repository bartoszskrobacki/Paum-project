import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Card from "../../components/Card";
import CategoryOfItems from "../../components/foodMenuComponents/CategoryOfItems";


const MenuWaiterScreen = props => {
    return(
        <View style={styles.screen} >
            <Card style={styles.Card}>
                <View style={styles.menuOptionContainer}>
                    <Button title='Create new Order'  onPress = {() => {props.navigation.navigate('ChooseTable')}}/>
                </View>
            </Card>
            <Card style={styles.Card}>
                <View style={styles.menuOptionContainer}>
                    <Button title='Check list of orders'  onPress = {() => {props.navigation.navigate('Waiter List of Orders')}}/>
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

export default MenuWaiterScreen;