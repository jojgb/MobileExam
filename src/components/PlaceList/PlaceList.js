import React from 'react'
import {StyleSheet, FlatList} from 'react-native'

import ListItem from '../ListItem/ListItem'

const PlaceList = props => {

    return (
        <FlatList
            style = {styles.listContainer}
            data = {props.places} //  [{key: 0, value: 'JKT'}]
            renderItem = {(info) => {
                return (
                    <ListItem 
                        placeImage = {info.item.image}
                        placeName = {info.item.nama}
                        onPressItem = {() => {props.onItemSelected(info.item.key)}}
                    />
                )
            }}
        />
    )
    
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default PlaceList