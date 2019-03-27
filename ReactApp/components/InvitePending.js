import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import CardHori from './CardHori'
import { LinearGradient } from 'expo';
import firebase from '../constants/firebase'
import 'firebase/firestore';
import utility from './language.utility'


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
var db = firebase.firestore()
//var uid = '1IGWOQNMDL9CsnEV6vtO'

export default class InviteHoriScroll extends React.Component{
    constructor(prop){
        super(prop)
        this.state ={
            queryPendingList: null
        }
    }
    
    //query a specific uid
    // async queryUser(uid) {
    //     var query_result = []
    //     var query = await db.collection('users')
    //     .doc(uid)
    //     .get()
    //     .then( 
    //             async function(doc) {
                   
    //             var obj = doc.data()
    //             Object.assign(obj, {id: uid})
    //             query_result.push(obj)
    //     })
    //     console.log(query_result)
    //     // this.setState({
    //     //     queryResultList: query_result
    //     // }
    //     // )
    // }

    //query pending list assoc w/ a specific uid
    async queryPendingInvite() {
        var uid = this.props.uid
        var query_result = []
        var query = await db.collection('users')
        .doc(uid)
        .get()
        .then( 
            async function (udoc) {
            var subresult = await udoc.ref.collection('pending').get()
            .then(function(snapshot){
                snapshot.forEach(async function(doc){
                    var obj = doc.data()
                    Object.assign(obj, {id: doc.id})
                    query_result.push(obj)
                })
            })
            
        })
        console.log(query_result)
        this.setState({
            queryPendingList: query_result
        })
        }

    // query general user
    // async queryUser(db) {
    //     var query_result = []
    //     var query = await db.collection('users')
    //     .get()
    //     .then( function(snapshot){
    //         snapshot.forEach( 
    //             async function(doc) {
    //             var obj = doc.data()
    //             Object.assign(obj, {id: uid})
    //             query_result.push(obj)
                
    //         })
    //     })
    //     console.log(query_result)
      
    // }

    componentWillMount(){
         this.queryPendingInvite()
    }
    

    keyExtractor(item){
        return item.id.toString()
    }

    renderRow({item}){
        console.log(item)
        return(
            <View style={styles.rowContainer}>
                <View style={styles.podCastContainer}>
                    <CardHori invitePending = {item}/>
                </View> 
            </View>
        )
    }

    render(){
        if(this.state.queryPendingList !== null){
        return(
            <View style={styles.container}>
                <LinearGradient 
                style={{width: windowWidth, height:  0.3 * windowHeight, flex: 1}}
                colors={['#FFFFFF', '#B0C4DE']}
                start={ [0, 1] }
                end={ [0, 0] }
                >

                <View style={[styles.container, {alignItems:'center'}]}>
                <View style={[styles.titleSection, {left: -0.4 * windowWidth}]}>
                    <Text style={styles.title}> {utility.t('pending')}</Text>
                </View>
                <View style={{height: 0.22 * windowHeight, width: 0.92 * windowWidth, }}>
                 <FlatList 
                    style={styles.ScollablePodCasts}
                    data={this.state.queryPendingList}
                    renderItem={this.renderRow}
                    keyExtractor={this.keyExtractor}
                    horizontal={true}
                /> 
                </View>
                </View>

                </LinearGradient>
            </View>
        )
        }else{
            return(<View style={{flex:1}}/>)
        }
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 0.84,
            flexWrap: 'wrap',
            flexDirection:'column',
            height:  0.3 * windowHeight,
        },
        titleSection:{
            height: 29,
            flexDirection:'row', 
            justifyContent: 'space-between',
            alignItems:'center',
            
        },
        title: {
            fontSize: 14,
            fontFamily: 'System',
            opacity: 0.8,
            color: '#000000',
            letterSpacing: 0,
            //padding: 18,
        },

        ScollablePodCasts:{
            // width: 0.92 * windowWidth, 
            // height: 0.22 * windowHeight,
            //backgroundColor: 'gray',
            
            },

        rowContainer:{
            flex: 1,
            flexDirection:'column', 
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 15,
        },

        podCastContainer:{
            flexDirection:'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        podCastTile:{
            fontSize: 14,
            color: "#FFFFFF",
            letterSpacing: -0.15,
            textAlign: "left",
            paddingTop: 10
        }, 

        card: {
            backgroundColor: '#FFFFFF',
            height: 0.2 * windowHeight, 
            width: 0.86 * windowWidth,
        }

    }
)