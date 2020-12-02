import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';


const Inputs = props => {
    return(
            <View style={styles.inputContainer}>
                <TextInput {...props} style={styles.input} />
            </View>

    );

};

const styles = StyleSheet.create({
    inputContainer:{
      flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 2,
        padding: 20
    },
    input: {
        backgroundColor: 'lightgrey',
        borderColor: 'grey',
        borderRadius: 3,
        borderBottomWidth: 1,
        width: '100%',
        height: 25,
        textAlign: 'center',
        fontSize: 20,

    }
});

export default Inputs;