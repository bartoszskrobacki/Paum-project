import React from 'react'
import {View, StyleSheet,Text, Button} from 'react-native'




const MealItem = props => {
    return (
        <View style={styles.mealItemContainer} >
           <View style={styles.mealItemText}>
               <Text>{props.name}</Text>
                <Text>{props.price}zł</Text>
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
    width: '70%'
    },
    mealItemAddButton:{

    }

});


export default MealItem;