import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from "react-redux";
import Card from "../../components/Card";


const MenuChefScreen = props => {

    return(
        <View style={styles.screen} >
            <Card style={styles.Card}>
                <View style={styles.menuOptionContainer}>
                    <Button title='Check orders to prepare'  onPress = {() => {props.navigation.navigate('OrdersChef')}}/>
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

function  mapStateToProps(state) {
    return{
        login: state.authState
    }
}

export default connect(mapStateToProps)(MenuChefScreen);