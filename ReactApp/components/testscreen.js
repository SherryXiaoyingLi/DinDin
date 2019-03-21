import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { Constants } from 'expo'
//import * as firebase from 'firebase'
//import 'firebase/firestore';

//const admin = require('firebase-admin');
import firebase from '../constants/firebase'

var db = firebase.firestore()

function query(db) {
  var query = db.collection('users')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        //console.log(doc.id, ' => ', doc.data().phone_num);
        doc.data().phone_num
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  return query;
}


export default class testscreen extends React.Component{
    constructor(prop){
        super(prop);
    }

    render(){
        // console.log('testscreen printout')
        // var result = query(db)
        return(
            
            <View >
                {/* <Text>testscreen printout</Text>
                <Text>{result.map(res => <div>{res}<div>)}</Text> */}
            </View>
        )
    }

}