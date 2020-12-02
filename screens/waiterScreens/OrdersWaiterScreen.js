import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import firebase from "firebase";
import Modal from 'react-native-modalbox';
import CategoryOfItems from "../../components/foodMenuComponents/CategoryOfItems";
import {connect} from "react-redux";
import MealItem from "../../components/foodMenuComponents/Mealtem";
import {productQuantity} from "../../actions/productQuanitity";
import {removeFromBasket} from "../../actions/removeAction";
import {addOrder} from "../../actions/addOrderAction";
import {resetBasket} from "../../actions/resetBasketAction";
import {TextInput} from "react-native-web";





const OrdersWaiterScreen = props => {

    const dataMenuHandler = (pdata) => {
        setData(pdata);
    }



    const [data,setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [swipeToClose, setSwipeToLose] = useState(true);

    const show=useRef();


    const modalOpenHandler = () => {
      setIsOpen(true);
    };
    const modalCloseHandler = () => {
        setIsOpen(false);
    };
    const swipeToCloseHandler = () =>{
      setSwipeToLose(!swipeToClose);
    };
    const {tableNumber} = props.route.params;



    firebase.database().ref('menu/').on("value", (snapshot) => {
        let allDishes = [];
        snapshot.forEach(snap => {
            allDishes.push(snap.val());
        });
        console.log(allDishes + " xxxxxxxxxxxxddddddddd");
       setData()
    });



    return(
        <View style={styles.screen} >
        <ScrollView  >
          <CategoryOfItems data={data} category='Zupa'/>
          <CategoryOfItems data={data} category='Obiad'/>
        </ScrollView>
            <Button title="Basket" onPress={() => {modalOpenHandler()}} />

            <Modal
                style={styles.modal}
                isOpen={isOpen}
                onClosed={modalCloseHandler}
                >
                <View style={ styles.btnModal}>

                    <Button title="X" color="black" onPress={() => {modalCloseHandler()}}/>
                </View>
                <Text>{tableNumber} </Text>
                {props.products.map(meal =>
                    <MealItem key = {meal.id} name={meal.name} price={meal.price}/>
                )
                }
                <Button title="Zamów" color="black" onPress={() => { props.addOrder(props.finalizeOrder.listOfOrders, {table: {tableNumber}, waiter: "www", customerid:"111", listOfCurrentThings:props.products });

                    console.log(props.finalizeOrder);
                    props.resetBasket()}}/>
            </Modal>

        </View>
    );

};


const styles = StyleSheet.create({
    screen:{
        flex:1
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
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },
    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
    },
});
const mapStateToProps = state => ({
    products: state.orderState.listOfCurrentThings,
    finalizeOrder: state.finalizeOrderState
})


export default connect(mapStateToProps,{productQuantity, removeFromBasket, resetBasket, addOrder})(OrdersWaiterScreen);