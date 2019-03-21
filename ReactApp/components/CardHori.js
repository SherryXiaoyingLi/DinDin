import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
//import firebase from '../constants/firebase'

var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
//var db = firebase.firestore()

export default class cardHori extends React.Component{
    constructor(prop){
        super(prop);

    }


    render(){
        return(
            <View style={styles.container}>
            <View style={styles.top}>
            <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
            <View style={{paddingLeft: 0.008 * windowWidth, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontFamily: 'System', fontSize: 14, color: '#000000', letterSpacing:0, paddingBottom: 0.02 * windowWidth}}>Alma Evans</Text>
                <Text style={{fontFamily: 'System', fontSize: 14, opacity: 0.5, color: '#000000', letterSpacing:0}}>Sunday 10 March - 16:30pm</Text>
            </View>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate()}>
            <View style={styles.bottomLeft}>
                <Image style={styles.cross} source={require('../assets/Sliced/cross.png')}></Image>
                <Text style={{fontFamily: 'System',color: '#FF3B3B', fontSize:13, paddingLeft: 0.02 * windowWidth}}>Decline</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate()}>
            <View style={styles.bottomRight}>
                <Image style={styles.check} source={require('../assets/Sliced/check.png')}></Image>
                <Text style={{fontFamily: 'System',color: '#38D459', fontSize:13, paddingLeft: 0.02 * windowWidth}}>Accept</Text>
            </View>
            </TouchableOpacity>
            </View>
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
        borderColor: '#D3D3D3'
    },
    top: {
        width: 0.86 * windowWidth,
        height: 0.12 * windowHeight,
        borderBottomWidth: 0.5,
        borderBottomColor: '#D3D3D3',
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
        borderRightColor: '#D3D3D3',
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
