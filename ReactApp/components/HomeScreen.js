import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Constants } from 'expo'
import Header from './Header'
import InviteVertiScroll from './InviteVertiScroll'
import InvitePending from './InvitePending'
// import 'firebase/firestore';
// import firebase from '../constants/firebase'
import utility from './language.utility'
// var db = firebase.firestore()
//var uid = '1IGWOQNMDL9CsnEV6vtO'
var uid = 2
var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  

  render() {
    return (
      <View style={styles.container}>
      <Header navigation={this.props.navigation} style={styles.header}/>
      <InvitePending navigation={this.props.navigation} uid = {uid}/>
      <InviteVertiScroll style={{paddingTop: 10} }  uid = {uid}/>
 
       {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('createEvent')}>
           <View style={{width: 0.5 * windowWidth, height: 0.05 * windowHeight, borderColor:'#D3D3D3', borderWidth: 0.5}}><Text style={{}}>+ Add New Event</Text></View>
       </TouchableOpacity> */}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center', // flex-start, center, flex-end, stretch
    flexDirection: 'column',
    //justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    //justifyContent: 'center', // flex-start, center, flex-end, space-around, space-between, space-evenly
  },
  header: {
    //paddingTop: Constants.statusBarHeight,
    marginTop: 5,
  }
});
