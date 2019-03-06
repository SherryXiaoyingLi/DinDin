import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo'
import Header from './Header'
import InviteHoriScroll from './InviteHoriScroll'
import InviteVertiScroll from './InviteVertiScroll'
import firebase from '../constants/firebase'


export default class App extends React.Component {
  constructor(props){
    super(props);

    //initialize firebase
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(ApiKeys.FirebaseConfig)
    // }


  }
  // async login(email,pass){
  //   try {
  //     await firebase.auth()
  //       .signInWithEmailAndPassword(email, pass);
  //     console.log('Logged In!');
  //   } catch (error) {
  //     console.log(error.toString())
  //   }
  // }
  // user =firebase.database().ref('messages/').orderByKey().on('text', function(data){
  //   console.log(data.key);
  // });

  render() {
    return (
      <View style={styles.container}>
      <Header navigation={this.props.navigation} style={styles.header}/>
      <Text></Text>
      <InviteHoriScroll/>
      <InviteVertiScroll/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center', // flex-start, center, flex-end, stretch
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    //justifyContent: 'center', // flex-start, center, flex-end, space-around, space-between, space-evenly
  },
  header: {
    //paddingTop: Constants.statusBarHeight,
    marginTop: 5,
  }
});
