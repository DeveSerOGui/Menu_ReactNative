import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    cardView: {
        margin: 5,
        marginLeft: 10,
        padding: 10,
        width: '45%',
        height: 180,
        backgroundColor: '#FFFFFF',
    },

    imgFood: {
        width: 75, 
        height: 75,
        padding: 5,
        margin: 5,
        backgroundColor: '#FFFFFF'  
    },
    textCard:{
        fontSize: 16,
        
    }
});

export default styles;