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

    };

    _getNormalData = () => {

        const normalDatabseRef = firestore.collection("users").doc("azLw7vw6yjDKrRNMq9Ld");

        normalDatabseRef.get().then( doc => {

            console.log('--------------- Normal Database ---------------');

            if (doc.exists) console.log(doc.data());
             else console.log('El documento no existe');

            console.log('-----------------------------------------------');


        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
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