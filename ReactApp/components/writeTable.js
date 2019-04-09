import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { LinearGradient } from 'expo';
import firebase from '../constants/firebase'
//import 'firebase/firestore';
import utility from './language.utility'
//import { database } from 'firebase';


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
var db = firebase.database()
var leadsRef_Users = db.ref('UsersTable');
var leadsRef_Accepted = db.ref('Accepted/');
var leadsRef_Pending = db.ref('Pending')

export default class InvitePending extends React.Component{
    constructor(prop){
        super(prop)
    }
    
    async writeTable() {
        // month 4
            firebase.database().ref('Pending/').push({inviter: '4' , location: 'Downtown', time: "4/7/2019, 7:14:49 PM", month:"April"})
            firebase.database().ref('Pending/').push({inviter: '5' , location: 'Downtown', time: "4/7/2019, 7:42:36 PM", month:"April"})        
            firebase.database().ref('Pending/').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "4/8/2019, 3:12:31 AM", month:"April"})
            firebase.database().ref('Pending/').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "4/15/2019, 3:12:31 AM", month:"April"})                               
            firebase.database().ref('Pending/').push({inviter: '-Lbtc2pwYSb3N1Gt72Ww' , location: 'Downtown', time: "4/18/2019, 3:12:31 AM", month:"April"})                                                                
            firebase.database().ref('Pending/').push({inviter: '-Lbtc5GNxjhqFYClqXfw' , location: 'Downtown', time: "4/19/2019, 3:12:31 PM", month:"April"})                
        //month 5
        firebase.database().ref('Pending/').push({inviter: '2' , location: 'Downtown', time: "5/8/2019, 3:12:31 AM", month:"May"})
            firebase.database().ref('Pending/').push({inviter: '3' , location: 'Downtown', time: "5/4/2019, 3:12:31 AM", month:"May"})
            firebase.database().ref('Pending/').push({inviter: '-Lbtc5GNxjhqFYClqXfw' , location: 'Downtown', time: "5/19/2019, 3:12:31 AM", month:"May"})                
            firebase.database().ref('Pending/').push({inviter: '-Lbtc727gY8Bi6SiGtQS' , location: 'Downtown', time: "5/8/2019, 3:12:31 PM", month:"May"})                
            firebase.database().ref('Pending/').push({inviter: '-LbtcLfFYTgg6PJ8x5O_' , location: 'Downtown', time: "5/17/2019, 9:12:31 AM", month:"May"})                
            firebase.database().ref('Pending/').push({inviter: '-LbtcPxMy4fcvY2uDJwJ' , location: 'Downtown', time: "5/8/2019, 9:12:31 PM", month:"May"})                
       
        // month 6   
        firebase.database().ref('Pending/').push({inviter: '2' , location: 'Downtown', time: "6/8/2019, 3:12:31 AM", month:"June"})
            firebase.database().ref('Pending/').push({inviter: '3' , location: 'Downtown', time: "6/18/2019, 9:12:31 AM", month:"June"})
            firebase.database().ref('Pending/').push({inviter: '4' , location: 'Downtown', time: "6/9/2019, 3:12:31 AM", month:"June"})
            firebase.database().ref('Pending/').push({inviter: '5' , location: 'Downtown', time: "6/17/2019, 3:12:31 AM", month:"June"})        
            firebase.database().ref('Pending/').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "6/3/2019, 5:12:31 PM", month:"June"})
            firebase.database().ref('Pending/').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "6/11/2019, 8:12:31 AM", month:"June"})                                
        
        }
        // firebase.database().ref('UsersTable/').push(
        //     {name: 'White', phone_num: 123456}
        // )
            // }

    componentWillMount(){
        this.writeTable()
    }
   
    render(){
            return(<View style={{flex:1}}/>)
    }
}
