import React, {Component} from 'react'
// import {View, TextInput, Button, StyleSheet} from 'react-native'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class PlaceInput extends Component{

  placeNameChangedHandler = (val) => {
      this.setState({placeName: val})
  }

  render(){
      return(
          <DefaultInput
              placeholder={this.props.holder}
              value = {this.props.placeName}
              onChangeText = {this.props.onChangeText}
          />
      )
  }
}

export default PlaceInput;