import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import firebase from "firebase";
import Modal from 'react-native-modalbox';
import CategoryOfItems from "../../components/foodMenuComponents/CategoryOfItems";
import {connect} from "react-redux";
import MealItem from "../../components/foodMenuComponents/OrderMealtem";
import {productQuantity} from "../../actions/productQuanitity";
import {removeFromBasket} from "../../actions/removeAction";
import {addOrder} from "../../actions/addOrderAction";
import {resetBasket} from "../../actions/resetBasketAction";
import {TextInput} from "react-native-web";
import MenuDataService from "../../services/MenuService"
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import Card from "../../components/Card";
import SwitchButton from "switch-button-react-native";

const OrdersWaiterScreen = props => {


    const [isOpen, setIsOpen] = useState(false);
    const [swipeToClose, setSwipeToLose] = useState(true);
    const [payment, setPayment] = useState("Card");

    const fliperHanlder = (e) => {
        if(e ===1){
            setPayment("Card");
        }
        else
        {
            setPayment("Cash");
        }
    };

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


    console.log(props.products);


    return(
        <View style={styles.screen} >
        <ScrollView  >
          <CategoryOfItems data={props.menu} category='Zupa'/>
          <CategoryOfItems data={props.menu} category='Obiad'/>
            <CategoryOfItems data={props.menu} category='Zestaw Obiadowy'/>
          <CategoryOfItems data={props.menu} category='Deser'/>
            <CategoryOfItems data={props.menu} category='Napój'/>
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
                <View style={styles.headerContainer}>
                <Text style={ styles.headerTextStyle}>{tableNumber.name} </Text>
                </View>

                {props.products.listOfCurrentThings.map(meal =>
                  <Card key = {meal.id} style={styles.Card}>
                      <MealItem name={meal.name} price={meal.price} quantity={meal.quantity}>
                          <Button title="+" onPress={()=>props.productQuantity(props.products.listOfCurrentThings, meal,"INCREASE")}/>
                          <Button title="X" onPress={()=>props.removeFromBasket(props.products.listOfCurrentThings, meal)}/>
                          <Button title="-" onPress={()=>props.productQuantity(props.products.listOfCurrentThings, meal,"DECREASE")}/></MealItem>
                  </Card>
                )
                }
              <View style={styles.btnOrder} >
                  <SwitchButton onValueChange={(e) => fliperHanlder(e)} btnBackgroundColor = 'black'  text1='Card' text2='Cash' width="200px" />
                <Button title="Order" color="black"  onPress={() => { props.addOrder(props.finalizeOrder, {table: tableNumber.name, listOfCurrentThings:props.products.listOfCurrentThings, orderCost: props.products.shoppingCartCost, payment: payment });
                    props.resetBasket()}}/>
                  <Text>{props.products.shoppingCartCost.toFixed(2)} zł</Text>
              </View>
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
    headerContainer:{
      marginTop: 20,
    },

    headerTextStyle:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modal: {
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
        backgroundColor: "transparent",
    },
    btnOrder: {
        position: "absolute",
        bottom: 0,
        alignItems: 'center'
    }
});
const mapStateToProps = state => ({
    products: state.orderState,
    finalizeOrder: state.firestore.ordered.currentOrders || state.finalizeOrderState.listOfOrders,
    menu: state.firestore.ordered.menu  || state.finalizeOrderState.listOfOrders
})


export default compose(connect(mapStateToProps,{productQuantity, removeFromBasket, resetBasket, addOrder}),firestoreConnect(() => ['menu', 'currentOrders']))(OrdersWaiterScreen);