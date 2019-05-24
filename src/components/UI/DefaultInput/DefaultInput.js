import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => {
    return <TextInput 
        {...props}
        style={[Styles.input, props.style]}/>
}

const Styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        padding: 5,
        margin: 8

    }
})

export default defaultInput