import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { backToRoot } from '../MainTabs/startMainTabs'
import {Fire} from '../../firebase/index'
import {logoutUser} from '../../store/actions/auth'
import Icon from 'react-native-vector-icons/Ionicons'


class SideDrawer extends Component {
    logOut = () => {
        Fire.auth().signOut()
        .then( async res => {
            await this.props.onLogoutUser()
            backToRoot()
        })
    }

    render() {
        return (
            <View style={[styles.container, {width: Dimensions.get('window').width * 0.8}]}>
                <TouchableOpacity onPress ={this.logOut}>
                <View style = {styles.drawerItem}>
                    <Icon name='ios-log-out' color='#aaa' size  ={30} style={styles.drawerIcon} />
                    <Text>Side Drawer</Text>
                </View>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: 'white',
        flex: 1
    },
    drawerItem: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    drawerIcon: {
        marginRight: 10
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogoutUser: () => dispatch(logoutUser())
    }
}


export default connect(null, mapDispatchToProps)(SideDrawer)