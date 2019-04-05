import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import {CheckBox} from 'react-native-elements'
// import {CheckBox} from 'native-base'
import { Constants } from 'expo'
import 'firebase/firestore';
import firebase from '../constants/firebase'



var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

var db = firebase.firestore()

export default class EventDenied extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          checked:[],
          letter:'a',
          podCastList:null,
        };
    }
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

    
    async getPodCastData(){
        let response = await fetch("https://www.cs.virginia.edu/~dgg6b/Mobile/PodCast/podCastList.json")
        let extractedJson = await response.json()
        this.setState({
            podCastList: extractedJson.podCastList
        })
    }

    componentWillMount(){
        this.getPodCastData()
        this.queryPendingInvite()
    }
    

    keyExtractor(item){
        return item.id.toString()
    }

    countArr(array){
        ct = 0
        for (var i=0; i<array.length;i++){
            if (array[i]==true){
                ct ++
            }
        }
        return ct
    }

    handleChange (index){
    
        let newChecked = [...this.state.checked];

        newChecked[index] = !newChecked[index];
        this.setState({ checked:newChecked });
        ct = this.countArr(newChecked)
        this.props.countSelected(ct)
        console.log(newChecked)
      }

    renderRow({item,index}){
        // console.log(item)
        // console.log(index)
        // console.log(this.state)
        // console.log(this.state.checked)
        return(
            <View style={styles.rowContainer}>
                <View style={styles.podCastContainer}>
                    
                    <View style={styles.card}>
                    <View style={styles.top}>
                    <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <View style={{paddingLeft: 0.008 * windowWidth, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{fontFamily: 'System', fontSize: 14, color: '#000000', letterSpacing:0, paddingBottom: 0.02 * windowWidth}}>Alma Evans</Text>
                    <Text style={{fontFamily: 'System', fontSize: 14, opacity: 0.5, color: '#000000', letterSpacing:0}}>456-984-0797</Text>
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
        if(this.state.podCastList !== null){
        return(
            
            <View style={styles.container}>
            
                 <FlatList
                    style={styles.ScollablePodCasts}
                    data={this.state.podCastList}
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
