import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from "react-redux";
import Card from "../../components/Card";


const MenuChefScreen = props => {
    console.log(props.login.email);
    return(
        <View style={styles.screen} >
            <Card style={styles.Card}>
                <Text>Email: {props.login.email}</Text>
                <View style={styles.menuOptionContainer}>
                    <Button title='name'/>
                    <Text style={styles.textStyle}>Sprawdź listę zamówień</Text>
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
        login: state.userState
    }
}

export default connect(mapStateToProps)(MenuChefScreen);