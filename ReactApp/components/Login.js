import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button, Alert } from 'react-native';
//import { StackNavigator } from 'react-navigation';
import { Constants, Facebook } from 'expo';
import HomeScreen from './HomeScreen';
//import * as firebase from 'firebase'; 
import firebase from '../constants/firebase'
import {auth} from 'firebase'
import utility from './language.utility'


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('on change')
      if (user != null) {
        console.log('user')
      }
    })
  }
  async handleFacebookLogin(navigation) {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '818762215127916', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );
      console.log(type + " "+ token)

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`
          );
          const profile = await response.json();
          console.log("Was Successful")
          navigation.navigate('home', { profile });
          const credential = auth.FacebookAuthProvider.credential(token)
          firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
            console.log(error)
          })
          break;
        }
        case 'cancel': {
          Alert.alert('Whoops!', 'You need a facebook to access DinDin:)');

          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      console.log('Something unexpected happened');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={utility.t('loginfb')}
          onPress={() => this.handleFacebookLogin(this.props.navigation)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    justifyContent:'center',
    alignItems:'center',
    
  },
});
