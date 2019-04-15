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
            firebase.database().ref('Pending/April').push({inviter: '4' , location: 'Downtown', time: "4/7/2019, 7:14:49 PM", month:"April"})
            firebase.database().ref('Pending/April').push({inviter: '5' , location: 'Downtown', time: "4/7/2019, 7:42:36 PM", month:"April"})        
            firebase.database().ref('Pending/April').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "4/8/2019, 3:12:31 AM", month:"April"})
            firebase.database().ref('Pending/April').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "4/15/2019, 3:12:31 AM", month:"April"})                               
            firebase.database().ref('Pending/April').push({inviter: '-Lbtc2pwYSb3N1Gt72Ww' , location: 'Downtown', time: "4/18/2019, 3:12:31 AM", month:"April"})                                                                
            firebase.database().ref('Pending/April').push({inviter: '-Lbtc5GNxjhqFYClqXfw' , location: 'Downtown', time: "4/19/2019, 3:12:31 PM", month:"April"})                
        //month 5
        firebase.database().ref('Pending/May').push({inviter: '2' , location: 'Downtown', time: "5/8/2019, 3:12:31 AM", month:"May"})
            firebase.database().ref('Pending/May').push({inviter: '3' , location: 'Downtown', time: "5/4/2019, 3:12:31 AM", month:"May"})
            firebase.database().ref('Pending/May').push({inviter: '-Lbtc5GNxjhqFYClqXfw' , location: 'Downtown', time: "5/19/2019, 3:12:31 AM", month:"May"})                
            firebase.database().ref('Pending/May').push({inviter: '-Lbtc727gY8Bi6SiGtQS' , location: 'Downtown', time: "5/8/2019, 3:12:31 PM", month:"May"})                
            firebase.database().ref('Pending/May').push({inviter: '-LbtcLfFYTgg6PJ8x5O_' , location: 'Downtown', time: "5/17/2019, 9:12:31 AM", month:"May"})                
            firebase.database().ref('Pending/May').push({inviter: '-LbtcPxMy4fcvY2uDJwJ' , location: 'Downtown', time: "5/8/2019, 9:12:31 PM", month:"May"})                
       
        // month 6   
        firebase.database().ref('Pending/June').push({inviter: '2' , location: 'Downtown', time: "6/8/2019, 3:12:31 AM", month:"June"})
            firebase.database().ref('Pending/June').push({inviter: '3' , location: 'Downtown', time: "6/18/2019, 9:12:31 AM", month:"June"})
            firebase.database().ref('Pending/June').push({inviter: '4' , location: 'Downtown', time: "6/9/2019, 3:12:31 AM", month:"June"})
            firebase.database().ref('Pending/June').push({inviter: '5' , location: 'Downtown', time: "6/17/2019, 3:12:31 AM", month:"June"})        
            firebase.database().ref('Pending/June').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "6/3/2019, 5:12:31 PM", month:"June"})
            firebase.database().ref('Pending/June').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "6/11/2019, 8:12:31 AM", month:"June"})                                
       // month 7
       firebase.database().ref('Pending/July').push({inviter: '4' , location: 'Downtown', time: "7/7/2019, 7:14:49 PM", month:"July"})
       firebase.database().ref('Pending/July').push({inviter: '5' , location: 'Downtown', time: "7/7/2019, 7:42:36 PM", month:"July"})        
       firebase.database().ref('Pending/July').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "7/8/2019, 3:12:31 AM", month:"July"})
       firebase.database().ref('Pending/July').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "7/15/2019, 3:12:31 AM", month:"July"})                               
       firebase.database().ref('Pending/July').push({inviter: '-Lbtc2pwYSb3N1Gt72Ww' , location: 'Downtown', time: "7/18/2019, 3:12:31 AM", month:"July"})                                                                
       firebase.database().ref('Pending/July').push({inviter: '-Lbtc5GNxjhqFYClqXfw' , location: 'Downtown', time: "7/19/2019, 3:12:31 PM", month:"July"})                
   //month 8
   firebase.database().ref('Pending/August').push({inviter: '2' , location: 'Downtown', time: "8/8/2019, 3:12:31 AM", month:"August"})
       firebase.database().ref('Pending/August').push({inviter: '3' , location: 'Downtown', time: "8/4/2019, 3:12:31 AM", month:"August"})
       firebase.database().ref('Pending/August').push({inviter: '-Lbtc5GNxjhqFYClqXfw' , location: 'Downtown', time: "8/19/2019, 3:12:31 AM", month:"August"})                
       firebase.database().ref('Pending/August').push({inviter: '-Lbtc727gY8Bi6SiGtQS' , location: 'Downtown', time: "8/8/2019, 3:12:31 PM", month:"August"})                
       firebase.database().ref('Pending/August').push({inviter: '-LbtcLfFYTgg6PJ8x5O_' , location: 'Downtown', time: "8/17/2019, 9:12:31 AM", month:"August"})                
       firebase.database().ref('Pending/August').push({inviter: '-LbtcPxMy4fcvY2uDJwJ' , location: 'Downtown', time: "8/8/2019, 9:12:31 PM", month:"August"})                
  
   // month 9   
   firebase.database().ref('Pending/September').push({inviter: '2' , location: 'Downtown', time: "9/8/2019, 3:12:31 AM", month:"September"})
       firebase.database().ref('Pending/September').push({inviter: '3' , location: 'Downtown', time: "9/18/2019, 9:12:31 AM", month:"September"})
       firebase.database().ref('Pending/September').push({inviter: '4' , location: 'Downtown', time: "9/9/2019, 3:12:31 AM", month:"September"})
       firebase.database().ref('Pending/September').push({inviter: '5' , location: 'Downtown', time: "9/17/2019, 3:12:31 AM", month:"September"})        
       firebase.database().ref('Pending/September').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "9/3/2019, 5:12:31 PM", month:"September"})
       firebase.database().ref('Pending/September').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "9/11/2019, 8:12:31 AM", month:"September"})                                
  
       // month 10   
   firebase.database().ref('Pending/October').push({inviter: '2' , location: 'Downtown', time: "10/8/2019, 3:12:31 AM", month:"October"})
   firebase.database().ref('Pending/October').push({inviter: '3' , location: 'Downtown', time: "10/18/2019, 9:12:31 AM", month:"October"})
   firebase.database().ref('Pending/October').push({inviter: '4' , location: 'Downtown', time: "10/9/2019, 3:12:31 AM", month:"October"})
   firebase.database().ref('Pending/October').push({inviter: '5' , location: 'Downtown', time: "10/17/2019, 3:12:31 AM", month:"October"})        
   firebase.database().ref('Pending/October').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "10/3/2019, 5:12:31 PM", month:"October"})
   firebase.database().ref('Pending/October').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "10/11/2019, 8:12:31 AM", month:"October"})                                

   // month 11   
   firebase.database().ref('Pending/November').push({inviter: '2' , location: 'Downtown', time: "11/8/2019, 3:12:31 AM", month:"November"})
       firebase.database().ref('Pending/November').push({inviter: '3' , location: 'Downtown', time: "11/18/2019, 9:12:31 AM", month:"November"})
       firebase.database().ref('Pending/November').push({inviter: '4' , location: 'Downtown', time: "11/9/2019, 3:12:31 AM", month:"November"})
       firebase.database().ref('Pending/November').push({inviter: '5' , location: 'Downtown', time: "11/17/2019, 3:12:31 AM", month:"November"})        
       firebase.database().ref('Pending/November').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "11/3/2019, 5:12:31 PM", month:"November"})
       firebase.database().ref('Pending/November').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "11/11/2019, 8:12:31 AM", month:"November"})                                
  
       // month 12   
   firebase.database().ref('Pending/December').push({inviter: '2' , location: 'Downtown', time: "12/8/2019, 3:12:31 AM", month:"December"})
   firebase.database().ref('Pending/December').push({inviter: '3' , location: 'Downtown', time: "12/18/2019, 9:12:31 AM", month:"December"})
   firebase.database().ref('Pending/December').push({inviter: '4' , location: 'Downtown', time: "12/9/2019, 3:12:31 AM", month:"December"})
   firebase.database().ref('Pending/December').push({inviter: '5' , location: 'Downtown', time: "12/17/2019, 3:12:31 AM", month:"December"})        
   firebase.database().ref('Pending/December').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "12/3/2019, 5:12:31 PM", month:"December"})
   firebase.database().ref('Pending/December').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "12/11/2019, 8:12:31 AM", month:"December"})                                

   // month 1   
   firebase.database().ref('Pending/January').push({inviter: '2' , location: 'Downtown', time: "1/8/2019, 3:12:31 AM", month:"January"})
       firebase.database().ref('Pending/January').push({inviter: '3' , location: 'Downtown', time: "1/18/2019, 9:12:31 AM", month:"January"})
       firebase.database().ref('Pending/January').push({inviter: '4' , location: 'Downtown', time: "1/9/2019, 3:12:31 AM", month:"January"})
       firebase.database().ref('Pending/January').push({inviter: '5' , location: 'Downtown', time: "1/17/2019, 3:12:31 AM", month:"January"})        
       firebase.database().ref('Pending/January').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "1/3/2019, 5:12:31 PM", month:"January"})
       firebase.database().ref('Pending/January').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "1/11/2019, 8:12:31 AM", month:"January"})                                
  
       // month 2   
   firebase.database().ref('Pending/February').push({inviter: '2' , location: 'Downtown', time: "2/8/2019, 3:12:31 AM", month:"February"})
   firebase.database().ref('Pending/February').push({inviter: '3' , location: 'Downtown', time: "2/18/2019, 9:12:31 AM", month:"February"})
   firebase.database().ref('Pending/February').push({inviter: '4' , location: 'Downtown', time: "2/9/2019, 3:12:31 AM", month:"February"})
   firebase.database().ref('Pending/February').push({inviter: '5' , location: 'Downtown', time: "2/17/2019, 3:12:31 AM", month:"February"})        
   firebase.database().ref('Pending/February').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "2/3/2019, 5:12:31 PM", month:"February"})
   firebase.database().ref('Pending/February').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "2/11/2019, 8:12:31 AM", month:"February"})                                

   // month 3   
   firebase.database().ref('Pending/March').push({inviter: '2' , location: 'Downtown', time: "3/8/2019, 3:12:31 AM", month:"March"})
       firebase.database().ref('Pending/March').push({inviter: '3' , location: 'Downtown', time: "3/18/2019, 9:12:31 AM", month:"March"})
       firebase.database().ref('Pending/March').push({inviter: '4' , location: 'Downtown', time: "3/9/2019, 3:12:31 AM", month:"March"})
       firebase.database().ref('Pending/March').push({inviter: '5' , location: 'Downtown', time: "3/17/2019, 3:12:31 AM", month:"March"})        
       firebase.database().ref('Pending/March').push({inviter: '-Lbtbv9PV6C-tPDKYQ1X' , location: 'Downtown', time: "3/3/2019, 5:12:31 PM", month:"March"})
       firebase.database().ref('Pending/March').push({inviter: '-Lbtc0n7641r-cfY_5vD' , location: 'Downtown', time: "3/11/2019, 8:12:31 AM", month:"March"})                                
  
            
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
