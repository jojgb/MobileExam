import React, { Component } from 'react';
import { Text, StyleSheet } from "react-native";

const HeadingText = props => {
    return (
        <Text style={styles.textHeading}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 28,
        fontWeight: 'bold'
    }
})
export default HeadingText;