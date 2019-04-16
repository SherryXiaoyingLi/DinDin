import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { Constants } from 'expo'
import 'firebase/firestore';
import firebase from '../constants/firebase'
import { user } from 'firebase-functions/lib/providers/auth';


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
var bool = null
var db = firebase.database()
var leadsRef_MyCreate = db.ref('MyCreated');
var leadsRef_Users = db.ref('UsersTable');

export default class EventDenied extends React.Component{
    constructor(prop){
        super(prop)
        bool = this.props.value
        this.state ={
            podCastList: null,
            queryEvent:null,
            eventUsers:null,

        }
    }
    
    async getPodCastData(){
        let response = await fetch("https://www.cs.virginia.edu/~dgg6b/Mobile/PodCast/podCastList.json")
        let extractedJson = await response.json()
        this.setState({
            podCastList: extractedJson.podCastList
        })
    }
    async queryUsersTable() {
        let that = this
        var users = []
        let res = await leadsRef_Users.on('value', async function(snapshot){
            let query_result = []
            var subresult = await snapshot.forEach( function(childSnapshot){
                var item = childSnapshot.toJSON()
                var key = childSnapshot.key;
                var obj = Object.assign(item, {id: key})
                users.push(obj)
               
            })
            that.setState({
                    queryUserList: users
                })

                // console.log('result')
                // console.log(query_result)
                // users = query_result
            
        })
        return users
    }
    async queryEventTable(users) {
        var query_result = []
        let that = this
        let e_key = this.props.event_key
        console.log('e_key')
        console.log(e_key)
        let res = await leadsRef_MyCreate.on('value', async function(snapshot){
            let subresult = await snapshot.forEach( function(childSnapshot){
                let item = childSnapshot.toJSON()
                let key = String(childSnapshot.key);
                // console.log(key)
                if (key==e_key){
                    console.log(key)
                    let obj = Object.assign(item, {id: key})
                    console.log(item)
                    query_result=obj['pending']
                    console.log('pending')
                    console.log(query_result)
                }    
            })
            that.setState({
                    queryEvent: query_result

            })
            let finalUsers = []
            console.log('users')
            console.log(users)
            for (const u of users){
                for (const key of Object.keys(query_result)){
                    console.log('this key')
                    console.log(key)
                    if (u.id==query_result[key]){
                        finalUsers.push(u)
                        console.log('find')
                    }
                    
                }
            }
            console.log('eventusers')
            that.setState({
                eventUsers:finalUsers
            })
        
        }).bind(this)


        
    }

    componentDidMount(){
        this.getPodCastData()
        this.queryUsersTable().then((users)=>this.queryEventTable(users))

    }
    

    keyExtractor(item){
        return item.id.toString()
    }

    renderRow({item}){
        
        return(
            <View style={styles.rowContainer}>
                <View style={styles.podCastContainer}>
                    
                    <View style={styles.card}>
                    <View style={styles.top}>
                    <Image style={styles.avatar} source={{uri: item.img}}/>
                    <View style={{paddingLeft: 0.008 * windowWidth, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'System', fontSize: 14, color: '#000000', letterSpacing:0, paddingBottom: 0.02 * windowWidth}}>{item.name}</Text>
                    <Text style={{fontFamily: 'System', fontSize: 14, opacity: 0.5, color: '#000000', letterSpacing:0}}>{item.phone_num}</Text>
                    </View>
                    

                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.toggleDrawer()}}>
                        
                        <Image style={{width: 0.03 * windowHeight,height: 0.03 * windowHeight,}} source={bool ? require('../assets/Sliced/check.png'): require('../assets/Sliced/cross.png')}></Image>
                        </TouchableOpacity>
                    
                    </View>
                    
                    </View>
                </View> 
            </View>
        )
    }

    render(){
        console.log(this.state.eventUsers)
        if(this.state.eventUsers !== null){
        return(
            <View style={styles.container}> 
                 <FlatList
                    style={styles.ScollablePodCasts}
                    data={this.state.eventUsers} 
                    renderItem={this.renderRow}
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
                flex:1,
                flexDirection:'column',
                flexWrap: 'wrap',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                justifyContent:'space-between'
            },
    
            ScollablePodCasts:{
                width: windowWidth,
                },
    
            rowContainer:{
                flexDirection:'row', 
                justifyContent: 'space-evenly',
                alignItems: 'center'
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
                justifyContent:'space-between'
    
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
                width: windowWidth/6,
                paddingRight:0,
                marginRight:0,
               
              }
            }
)
