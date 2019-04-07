import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import CardHori from './CardHori'
import { LinearGradient } from 'expo';
import firebase from '../constants/firebase'
//import 'firebase/firestore';
import utility from './language.utility'
//import { database } from 'firebase';


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
var db = firebase.database()
var leadsRef_Users = db.ref('UsersTable');
var leadsRef_Pendings = db.ref('Pending');

export default class InviteHoriScroll extends React.Component{
    constructor(prop){
        super(prop)
        this.state ={
            queryPendingList: null,
            queryUserList: null,
            test:'a'
        }
    }
    
    async queryUsersTable() {
        var query_result = []
        var that = this
        var res = await leadsRef_Users.on('value', async function(snapshot){
            var subresult = await snapshot.forEach( function(childSnapshot){
                var item = childSnapshot.toJSON()
                var key = childSnapshot.key;
                var obj = Object.assign(item, {id: key})
                query_result.push(obj)
               
            })
            that.setState({
                    queryUserList: query_result
                })
            // console.log('abc')
            // console.log(query_result)
        }).bind(this)
    }

    async queryPending() {
        var query_result = []
        var that = this
        var res = await leadsRef_Pendings.on('value', async function(snapshot){
            var subresult = await snapshot.forEach( function(childSnapshot){
                var item = childSnapshot.toJSON()
                //console.log("success")
                var key = childSnapshot.key;
                var obj = Object.assign(item, {id: key})
                query_result.push(obj)
               
            })
            
            that.setState({
                    queryPendingList: query_result
                })
            
        }).bind(this)
    }

    async writeTable() {
            firebase.database().ref('Pending/').push(
{inviter: '-LbtcPxMy4fcvY2uDJwJ' , location: 'Downtown', time: '2019-04-8T00:59:01.000z', month:4}                
            )
        // firebase.database().ref('UsersTable/').push(
        //     {name: 'White', phone_num: 123456}
        // )
            }

    findUser(array, id){
        // console.log(id)
        return array.find(function(element){
            return element.id == id
        })
    }
    componentWillMount(){
        //this.writeTable()
        this.queryUsersTable()
        this.queryPending()
    }

    // componentDidMount(){
    //     this.queryUsersTable()
    //     // this.writeUserTable()
    //     this.queryPending()
    // }
    // componentWillReceiveProps(props){
    //     console.log("successss")
    //     console.log(props)
    //     if (props.refresh){
    //         this.queryUsersTable()
    //         this.queryPending()
    //     }
    // }

    keyExtractor(item){
        return item.id.toString()
    }

    renderRow({item}){
        //console.log("Success")
        //console.log(item)
        if (this.findUser(this.state.queryUserList, item.inviter)!== undefined){
        // console.log(this.findUser(this.state.queryUserList, item.inviter))
        return(
            <View style={styles.rowContainer}>
                <View style={styles.podCastContainer}>
                    <CardHori navigation={this.props.navigation} invitePending = {item} inviter = {this.findUser(this.state.queryUserList, item.inviter)}/>
                </View> 
            </View>
        )
        }
    }

    render(){
        // console.log("checccck")
        // console.log(this.state.queryPendingList)
        if(this.state.queryPendingList !== null){
            // console.log(this.state.queryPendingList)
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
                    extraData={this.state}
                    renderItem={this.renderRow.bind(this)}
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