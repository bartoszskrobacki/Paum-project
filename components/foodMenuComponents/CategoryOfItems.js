import React from 'react'
import {View, StyleSheet, Text, FlatList, Button} from 'react-native'
import Card from "../Card";
import MealItem from "./MenuMealItem";
import {addAction }from "./../../actions/addAction"
import {connect} from "react-redux";

const CategoryOfItems = props => {
    const item = props.products;
    return (
        <View style={styles.categoryContainer}>
            <Card style={styles.categoryNameCard}>
                <Text style={styles.categoryText}>{props.category}</Text>
            </Card>
            {props.data.filter(meal => meal.category === props.category).map(meal =>
                <Card style={styles.mealItemContainer} key = {meal.id}>
                    <MealItem name={meal.name} price={meal.price}/>
                    <Button title='ADD' onPress={()=> {props.addAction(item,meal)}}/>
                </Card>
            )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    categoryNameCard:
        {
            width: '95%',
            alignItems: 'center',
            marginTop: 20
        },
    mealItemContainer:
        {
            marginTop: 20,
            width: '90%',
        },
    categoryContainer:
        {
            width: '100%',
            alignItems: 'center'
        },
    categoryText:
        {
            fontWeight: 'bold',
            fontSize: 32
        }

});

const mapStateToProps = state => ({
    products: state.orderState.listOfCurrentThings
})


export default connect(mapStateToProps,{addAction})(CategoryOfItems);