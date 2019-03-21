import * as firebase from 'firebase';
import React from 'react';

var firebaseConfig = {
    apiKey: "AIzaSyAb1dFerO9kEe7ljjLBT3epQRuZ_qM4-Ic",
    authDomain: "expo-firebase-79661.firebaseapp.com",
    databaseURL: "https://expo-firebase-79661.firebaseio.com",
    projectId: "expo-firebase-79661",
    storageBucket: "expo-firebase-79661.appspot.com",
    messagingSenderId: "90512570982"
  };
  //firebase.initializeApp(firebaseConfig);
  //const functions = require('firebase-functions')
  //firebase.initializeApp(functions.config().firebase)
  //var db = firebase.firestore()

  export default (!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app();