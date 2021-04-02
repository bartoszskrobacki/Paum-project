import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux'
import Card from "../../components/Card";
import {addAction} from "../../actions/addAction";
import ListOfOrdersMealItem from "../../components/foodMenuComponents/ListOfOrdersMealItem"
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import ReactMoment from "./../../components/ReactMoment"
import {completeOrder} from "./../../actions/completeOrderAction"


const ListOfDishesScreen = props => {
let x =0;
    return(
        <ScrollView  >
            <View style={styles.screen}>
            {props.finalizedOrder.map((order) => { return (

            <Card key={order.id} style={styles.Card}>
                <View><Text><ReactMoment timestamp={order.createdAt.toDate()/1000} interval={1000} /></Text></View>
                <View style={styles.menuOptionContainer}>
                    <Text style={styles.textStyle}>{order.table}</Text>
                    {order.listOfCurrentThings.map(meal =>
                            <ListOfOrdersMealItem key = {meal.id} name={meal.name} price={meal.price.toFixed(2)} quantity={meal.quantity}/>
                    )
                    }
                </View>
                <Text font="20px" style={{textAlign: "center"}}>Summary: {order.orderCost.toFixed(2)}zł</Text>
                <Button title='Finalize Order' onPress={() => props.completeOrder(order) }/>
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

    finalizedOrder: state.firestore.ordered.currentOrders  || state.finalizeOrderState.listOfOrders
});


export default compose(connect(mapStateToProps, {completeOrder}),  firestoreConnect(() => ['currentOrders']))(ListOfDishesScreen);

