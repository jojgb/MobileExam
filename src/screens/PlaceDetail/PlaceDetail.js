import React, { Component } from 'react'
import {View, Image, Text, Button, StyleSheet} from 'react-native'
import { connect } from 'react-redux'

import { Fire } from './../../firebase/index'
import { deletePlace } from '../../store/actions/index'


class PlaceDetail extends Component {
    placeDeletedHandler = () => {
        // console.log(this.props.selectedPlace.key)
        // console.log(this.props.userId)
        var places = Fire.database().ref(`dataKariawan`)
        places.child(this.props.selectedPlace.key).remove()
        this.props.onDeletePlace(this.props.selectedPlace.key)
        this.props.navigator.pop()
        
    }

    render() {
        return(
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.placeImage}
                        source={this.props.selectedPlace.image}
                    />
                    <Text style={styles.placeName}>{`Nama: ${this.props.selectedPlace.nama}`}</Text>
                    <Text style={styles.placeName}>{`Usia: ${this.props.selectedPlace.usia}`}</Text>
                    <Text style={styles.placeName}>{`Jabatan: ${this.props.selectedPlace.jabatan}`}</Text>
                </View>
                <Button title='Delete' color='red' onPress={this.placeDeletedHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding: 22
    },
    placeImage: {
        width: '100%',
        height: 220
    },
    placeName : {
        fontWeight: 'bold',
        fontSize : 28,
        textAlign :'center'
    },
    button : {
        margin: 10
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}
const mapStateToProps = state => {
    return {
        userId: state.auth.user.uid
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail)