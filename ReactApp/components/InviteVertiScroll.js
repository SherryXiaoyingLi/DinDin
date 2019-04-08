import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { Constants } from 'expo'
import 'firebase/firestore';
import firebase from '../constants/firebase'


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
var db = firebase.database()
var leadsRef_Accpeted = db.ref('Accepted');
var leadsRef_Users = db.ref('UsersTable');

export default class InviteVertiScroll extends React.Component{
    constructor(prop){
        super(prop)
        this.state ={
            queryAcceptedList: null,
            queryUserList: null
        }
    }

    async queryAcceptedInvite() {
        let that = this
        var res = await leadsRef_Accpeted.on('value', async function(snapshot){
            let query_result = []
            var subresult = await snapshot.forEach( function(childSnapshot){
                var item = childSnapshot.toJSON()
                var key = childSnapshot.key;
                var obj = Object.assign(item, {id: key})
                query_result.push(obj)
               
            })
            that.setState({
                    queryAcceptedList: query_result
                })
        }).bind(this)
        
    }

    async queryUsersTable() {
        let that = this
        var res = await leadsRef_Users.on('value', async function(snapshot){
            let query_result = []
            var subresult = await snapshot.forEach( function(childSnapshot){
                var item = childSnapshot.toJSON()
                var key = childSnapshot.key;
                var obj = Object.assign(item, {id: key})
                query_result.push(obj)
               
            })
            that.setState({
                    queryUserList: query_result
            })
        }).bind(this)
        
    }


    findUser(array, id){
        return array.find(function(element){
            return element.id == id
        })
    }

    componentWillMount(){
        this.queryUsersTable()
        this.queryAcceptedInvite()
    }
    keyExtractor(item){
        return item.id.toString();
    }

    renderRow({item}){
        return(
            <View style={styles.rowContainer}>
                <View style={styles.podCastContainer}>
                    <View style={styles.titleView}>
                    <Text style={{fontFamily: 'System', fontSize: 13, color: '#000000', letterSpacing: 0 }}>Thursday 7 March</Text>
                    </View>
                    <View style={styles.card}>
                    <View style={styles.top}>
                    <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <View style={{paddingLeft: 0.008 * windowWidth, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'System', fontSize: 14, color: '#000000', letterSpacing:0, paddingBottom: 0.02 * windowWidth}}>{this.findUser(this.state.queryUserList, item.inviter).name}</Text>
                    <Text style={{fontFamily: 'System', fontSize: 14, opacity: 0.5, color: '#000000', letterSpacing:0}}>{this.findUser(this.state.queryUserList, item.inviter).phone_num}</Text>
                    </View>
                    
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.toggleDrawer()}}>
                        <Image style={{width: 0.055 * windowHeight,height: 0.055 * windowHeight,}} source={require('../assets/Sliced/call.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.navigation.toggleDrawer()}}>
                        <Image style={{marginRight:0, width: 0.055 * windowHeight,height: 0.055 * windowHeight,}} source={require('../assets/Sliced/email.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    
                    </View>
                </View> 
            </View>
        )
    }

    render(){
        if(this.state.queryPendingList !== null && this.state.queryUserList !==null){
        return(
            <View style={styles.container}>
                 <FlatList
                    style={styles.ScollablePodCasts}
                    data={this.state.queryAcceptedList}
                    extraData={this.state}
                    renderItem={this.renderRow.bind(this)}
                    keyExtractor={this.keyExtractor}
                /> 
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
            flex:1.5,
            flexDirection:'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            backgroundColor: '#FFFFFF'
        },

        ScollablePodCasts:{
            width: windowWidth,
            },

        rowContainer:{
            flexDirection:'row', 
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },

        podCastContainer:{
            flexDirection:'column', 
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        podCastTile:{
            fontSize: 14,
            color: "#FFFFFF",
            letterSpacing: -0.15,
            textAlign: "left",
            paddingTop: 0
        }, 
        card: {
            backgroundColor: '#FFFFFF',
            height: 0.12 * windowHeight, 
            width: windowWidth,
            borderBottomWidth: 0.5,
            borderBottomColor: '#D3D3D3',
            borderTopWidth: 0.5,
            borderTopColor: '#D3D3D3',
            flexDirection:'row',

        },
        titleView: {
            width:windowWidth, 
            height:0.06 * windowHeight, 
            backgroundColor:'#FFFFFF', 
            flexDirection:'row', 
            justifyContent: 'space-between',
            alignItems:'center',
            padding: 12
        },

        top: {
            width: 2*windowWidth/3,
            height: 0.12 * windowHeight,
            borderBottomWidth: 0.5,
            borderBottomColor: '#D3D3D3',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            // backgroundColor:'green',
            paddingLeft:0.5
        },
        avatar:{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            //alignItems:'center',
            //justifyContent:'center',
            width: 0.076 * windowHeight,
            height: 0.076 * windowHeight,
            backgroundColor:'#fff',
            borderRadius: 0.076 * windowHeight/2,
          },
          buttons:{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection:'row',
            // backgroundColor:'blue',
            height: 0.12 * windowHeight,
            width: windowWidth/3,
            paddingRight:0,
            marginRight:0
          }


    }
)
