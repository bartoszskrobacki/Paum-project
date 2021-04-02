import React from 'react'
import {View, StyleSheet,Text, Button} from 'react-native'




const MealItem = props => {
    return (
        <View style={styles.mealItemContainer} >
           <View style={styles.mealItemText}>

               <Text style={styles.mealName}>{props.quantity}x{props.name}</Text>
               <View style={styles.priceContainer}>{props.children}<Text>{props.price.toFixed(2)}zł</Text></View>


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
        right: 0,
        flexDirection: 'row',
    }

});


export default MealItem;