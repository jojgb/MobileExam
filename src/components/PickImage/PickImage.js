import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, Image} from 'react-native'

import ImgSrc from './../../assets/world-map.jpg'
class PickImage extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    {/* <Text>Image Placeholder</Text> */}
                    <Image source={ImgSrc} style={styles.placeholder}></Image>
                </View>
                <View style={styles.button}>
                    <Button title='Take Image'/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150,
    },
    button: {
        margin: 8
    }
})

export default PickImage