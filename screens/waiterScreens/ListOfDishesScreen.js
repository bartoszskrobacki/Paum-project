import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux'
import Card from "../../components/Card";
import {addAction} from "../../actions/addAction";
import MealItem from "../../components/foodMenuComponents/Mealtem";


const ListOfDishesScreen = props => {
    console.log(props.products);
    return(
        <ScrollView  >
            <View style={styles.screen}>
            {props.finalizedOrder.map((order) => { return (

            <Card key={order.table.tableNumber} style={styles.Card}>
                <View style={styles.menuOptionContainer}>
                    <Text style={styles.textStyle}>Table {order.table.tableNumber}</Text>
                    {order.listOfCurrentThings.map(meal =>
                            <MealItem key = {meal.id} name={meal.name} price={meal.price}/>
                    )
                    }
                </View>
            </Card>
            )})}
            </View>
        </ScrollView>
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

const mapStateToProps = state => ({
    finalizedOrder: state.finalizeOrderState.listOfOrders
})


export default connect(mapStateToProps)(ListOfDishesScreen);
