import React, { Component } from 'react'
import { View, Button, Text, StyleSheet,ImageBackground, KeyboardAvoidingView} from 'react-native'
import { connect } from 'react-redux'

import {Fire} from '../../firebase/index'
import { loginUser, createData } from '../../store/actions/index'


import { startTabs } from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import imageBackground from '../../assets/4.jpg'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'


class AuthScreen extends Component {
    state = {
        authMode : 'login',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    componentDidUpdate(){
        if(this.props.user){
            var places = Fire.database().ref(`dataKariawan`)
            places.once("value", this.props.onCreateData, err => {
              console.log(err);
            });
            startTabs();
        }
    }

    componentDidMount() {
        Fire.auth().onAuthStateChanged((user)=>{
            if(user){
                var {uid, email} = user
                // tembak ke redux
                this.props.onLoginUser(uid,email)
                
            }
        })
    }

    loginHandler= () => {
        Fire.auth()
          .signInWithEmailAndPassword(
            this.state.email,
            this.state.password
          )
          .then(res => {
            var { uid, email } = res.user;
            // Login ke aplikasi
            this.props.onLoginUser(uid, email);
          });
    }

    signupHandler = () => {
        if(this.state.email && this.state.password && this.state.confirm){
            if(this.state.password === this.state.confirm){
                if(this.state.password.trim().length > 6){
                    //signup
                    Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then(res => {
                        var {uid, email} = res.user
                        // temba ke redux
                        this.props.onLoginUser(uid,email)
                    }).catch(err => {
                        this.setState({error: err.message})
                    })
                } else {
                    this.setState({error: 'Password harus lebih dari 6 karakter'})
                }
            } else {
                this.setState({error: 'Password dan Confirm tidak sama'})
            }
        } else {
            this.setState({error: 'Harap isi semua kolom'})
        }
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === 'login' ? 'signup' : 'login'
            }
        })
    }

    render () {
        let submitButtonControl, headingTextControl
        let confirmPasswordControl = null

        let errMessage = null
        if(this.state.error){
            errMessage = (
                <Text>{this.state.error}</Text>
            )
        }

        if(this.state.authMode === 'signup'){
            confirmPasswordControl = (
                <DefaultInput
                    placeholder='Confirm Password'
                    onChangeText={val => {this.setState({confirm: val})}}
                    secureTextEntry/>
            )

            submitButtonControl = (
                <ButtonWithBackground color='#a5b4ef' onTekan={this.signupHandler}>
                    Signup
                </ButtonWithBackground>
            )

            headingTextControl = (
                <MainText>
                    <HeadingText>Please Sign Up</HeadingText>
                </MainText>
            )
        } else {
            submitButtonControl = (
                <ButtonWithBackground color='#a5b4ef' onTekan={this.loginHandler}>
                    Login
                </ButtonWithBackground>
            )

            headingTextControl = (
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
            )
        }

        return (
            <ImageBackground source={imageBackground} style={styles.backgroundImage}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <HeadingText>Jonathan Gabriel Budiman</HeadingText>
                    {headingTextControl}
                    <ButtonWithBackground color='#a5b4ef' onTekan={this.switchAuthModeHandler}>
                        Switch to {this.state.authMode === 'login' ? 'Signup' : 'Login'}
                    </ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput 
                            placeholder='Your E-Mail Address'
                            onChangeText={val => {this.setState({email: val})}}/>
                        <DefaultInput
                            placeholder='Password'
                            onChangeText={val => {this.setState({password: val})}}
                            secureTextEntry/>
                        {confirmPasswordControl}
                    </View>
                    {submitButtonControl}
                    {errMessage}
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    backgroundImage: {
        width: '100%',
        flex: 1,
    }
})

const mapStateToProps = state => {
    return {
        user: state.auth.user.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: (uid, email) => dispatch(loginUser(uid, email)),
        onCreateData: (items) => dispatch(createData(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)