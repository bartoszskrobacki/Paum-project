import React from 'react'
import {View, StyleSheet,Text} from 'react-native'
import {Button} from "react-native";



const ListOfOrdersMealItem = props => {
    return (
        <View style={styles.mealItemContainer} >
            <View style={styles.mealItemText}>
                <Text style={styles.mealName}>{props.quantity}x{props.name}</Text>
                <View style={styles.priceContainer}><Text>{props.price}zł</Text></View>

            </View>

        </View>
    );
};



const styles = StyleSheet.create({
    mealItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mealItemText:{
        width: '100%'
    },
    mealItemAddButton:{
    },
    mealName:{
        fontWeight: 'bold'
    },
    priceContainer:{
        position: 'absolute',
        right: 0
    }

});


export default ListOfOrdersMealItem;