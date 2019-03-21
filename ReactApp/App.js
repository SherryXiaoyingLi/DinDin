import React from 'react';
import {createDrawerNavigator, createSwitchNavigator, createStackNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
import Splash from './components/Splash'
import Login from './components/Login'
import testscreen from './components/testscreen'
import { Facebook } from 'expo';
<<<<<<< Updated upstream
=======
import * as firebase from 'firebase'
>>>>>>> Stashed changes


// let result = async function handleFacebookLogin() {
//   try {
//     const { type, token } = await Facebook.logInWithReadPermissionsAsync(
//       '818762215127916', 
//       { permissions: ['public_profile'] }
//     );
//     //console.log(type + " "+ token)

//     switch (type) {
//       case 'success': {
//         // Get the user's name using Facebook's Graph API
//         const response = await fetch(
//           `https://graph.facebook.com/me?access_token=${token}`
//         );
//         const profile = await response.json();
//         return 'home'
//       }
//       default: {
//         return 'spl'
//       }
//     }
//   }
//   catch (e) {
//   return 'home'
// }
// }

//const admin = require('firebase-admin')
// var firebaseConfig = {
//   apiKey: "AIzaSyAb1dFerO9kEe7ljjLBT3epQRuZ_qM4-Ic",
//   authDomain: "expo-firebase-79661.firebaseapp.com",
//   databaseURL: "https://expo-firebase-79661.firebaseio.com",
//   projectId: "expo-firebase-79661",
//   storageBucket: "expo-firebase-79661.appspot.com",
//   messagingSenderId: "90512570982"
// };
// firebase.initializeApp(firebaseConfig);
// //const functions = require('firebase-functions')
// //firebase.initializeApp(functions.config().firebase)
// var db = firebase.firestore()

<<<<<<< Updated upstream
// function query(db) {
//   var query = db.collection('users')
//     .get()
//     .then(snapshot => {
//       snapshot.forEach(doc => {
//         console.log(doc.id, ' => ', doc.data().name);
//       });
//     })
//     .catch(err => {
//       console.log('Error getting documents', err);
//     });
//   return query;
// }
// query(db)
=======

>>>>>>> Stashed changes

const homeStack = createDrawerNavigator({home: HomeScreen}) 
const authStack = createDrawerNavigator({login: Login});
const AppContainer = createAppContainer(
  createSwitchNavigator({
    spl: Splash,
    home: homeStack,
    auth: authStack,
    test: testscreen,
  },
  {
    initialRouteName: 'home'
  }
  ))

  var firebaseConfig = {
    apiKey: "AIzaSyAb1dFerO9kEe7ljjLBT3epQRuZ_qM4-Ic",
    authDomain: "expo-firebase-79661.firebaseapp.com",
    databaseURL: "https://expo-firebase-79661.firebaseio.com",
    projectId: "expo-firebase-79661",
    storageBucket: "expo-firebase-79661.appspot.com",
    messagingSenderId: "90512570982"
  };
  firebase.initializeApp(firebaseConfig);
export default AppContainer;

// export default class App extends React.Component {
  
//   render() {
//     return (
//       <AppContainer persistenceKey={"NavigationState"} />
//     );
//   }
// }


