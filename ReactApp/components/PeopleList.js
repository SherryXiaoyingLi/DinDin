import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import {CheckBox} from 'react-native-elements'
import { Constants } from 'expo'
import 'firebase/firestore';
import firebase from '../constants/firebase'



var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
var db = firebase.database()
var leadsRef_Users = db.ref('UsersTable');


export default class EventDenied extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          checked:[false,false,false,false,false],
          sendTo:[],
          podCastList:null,
          queryUsersList: null
        };
        this.getList = this.getList.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
                    queryUsersList: query_result

                })
                // console.log(query_result)
        }).bind(this)
        
    }

    
    async getPodCastData(){
        let response = await fetch("https://www.cs.virginia.edu/~dgg6b/Mobile/PodCast/podCastList.json")
        let extractedJson = await response.json()
        this.setState({
            podCastList: extractedJson.podCastList
        })
    }

    componentWillMount(){
        this.getPodCastData()
        this.queryUsersTable()
    }
    

    keyExtractor(item){
        return item.id.toString()
    }

    countArr(array){
        var ct = 0
        for (var i=0; i<array.length;i++){
            if (array[i]==true){
                ct ++
            }
        }
        return ct
    }

    getList(array){
        var list = []
        for (var i=0;i<array.length;i++){
            if (array[i]){
                list.push(i+1)
            }
        }
        return list
    }

    handleChange (index){
    
        let newChecked = [...this.state.checked];
        let usersList = [...this.state.queryUsersList]
        newChecked[index] = !newChecked[index];
        this.setState({ checked:newChecked });
        var ct = this.countArr(newChecked)
        this.props.countSelected(ct)
        console.log(newChecked)
        var sendTo = this.getList(newChecked)
        var sendToList = []

        for(var i = 0; i< sendTo.length;i++){
            u = usersList[sendTo[i]-1]
            sendToList.push(u['id'])
        } 
        this.props.getSendTo(sendToList)
      }

    renderRow({item,index}){

        return(
            <View style={styles.rowContainer}>
                <View style={styles.podCastContainer}>
                    
                    <View style={styles.card}>
                    <View style={styles.top}>
                    <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <View style={{paddingLeft: 0.008 * windowWidth, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'System', fontSize: 14, color: '#000000', letterSpacing:0, paddingBottom: 0.02 * windowWidth}}>{item.name}</Text>
                    <Text style={{fontFamily: 'System', fontSize: 14, opacity: 0.5, color: '#000000', letterSpacing:0}}>{item.phone_num}</Text>
                    </View>
                    

                    </View>
                    <View style={styles.buttons}>
                    
        <CheckBox 
        checked={this.state.checked[index]}
        color='#C0C0C0'
        checkedIcon={<Image source={require('../assets/Sliced/Selected.png')} style={{width:25,height:25}}/>}
        uncheckedIcon={<Image source={require('../assets/Sliced/Select.png')} style={{width:25,height:25}}/>}   
        onPress={() => this.handleChange(index)}
        />

                   
                    </View>
                    
                    </View>
                </View> 
            </View>
        )
    }

    render(){
        if(this.state.queryPendingList !== null){
        return(
            
            <View style={styles.container}>
            
                 <FlatList
                    style={styles.ScollablePodCasts}
                    data={this.state.queryUsersList}
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
