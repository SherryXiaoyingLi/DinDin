import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { Constants } from 'expo'
import * as firebase from 'firebase'
import 'firebase/firestore';


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height


export default class testscreen extends React.Component{
    constructor(prop){
        super(prop);
        this.state = ({
            users : []
        })
        this.ref = firebase.firestore().collection('users')
    }
    
    

    render(){
        return(
            
            <View style={styles.container}>
            <Text>listing items</Text>
            <FlatList
                data = {this.state.users} 
                renderItem = {({item,index})=>{
                    
                    return (
                        <Text>{item.name}</Text>

                    )
                
                }}>

            </FlatList>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: 0.22 * windowHeight, 
        width: 0.86 * windowWidth,
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#7cfc00',
        alignItems: 'center',
        justifyContent:'center',
    },
    top: {
        width: 0.86 * windowWidth,
        height: 0.12 * windowHeight,
        borderBottomWidth: 0.5,
        borderBottomColor: '#7cfc00',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottom: {
        flexDirection: 'row',
        width: 0.86 * windowWidth,
        height: 0.08 * windowHeight,
    },
    bottomLeft:{
        width: 0.43 * windowWidth,
        height: 0.08 * windowHeight,
        borderRightWidth: 0.5,
        borderRightColor: '#7cfc00',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomRight: {
        width: 0.43 * windowWidth,
        height: 0.08 * windowHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    cross:{
        width: 13,
        height: 13
    },
    check:{
        width: 13,
        height: 13
    },
    avatar:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width: 0.076 * windowHeight,
        height: 0.076 * windowHeight,
        backgroundColor:'#fff',
        borderRadius: 0.076 * windowHeight/2,
      }
    }
    )
