import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, CheckBox } from 'react-native';
import { Constants,LinearGradient } from 'expo'

import EventHeader from './EventHeader'
import utility from './language.utility'
import PeopleList from './PeopleList';


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

export default class EventDetail extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        selected : false,
        value:false,
      }
  
    }

  
    render() {
      return (
        <View style={styles.container}>
        <EventHeader navigation={this.props.navigation}/>
        <LinearGradient 
                //colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{width: windowWidth, height:  0.22 * windowHeight, flex: 1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}
                colors={['#FFFFFF', '#B0C4DE']}
                start={ [0, 1] }
                end={ [0, 0] }
                >
            <View style={{flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
            <View style={styles.card}>
            <Image style={{height:24,width:24}}source={require('../assets/Sliced/food.png')}></Image>
            <View style={{paddingLeft: 0.008 * windowWidth, flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{textAlign:'center', fontFamily: 'System', fontSize: 20, color: '#000000', letterSpacing:0, paddingBottom: 0.02 * windowWidth}}>Raymond House, Nabor Way</Text>
                <Text style={{textAlign:'center', fontFamily: 'System', fontSize: 14, opacity: 0.55, color: '#000000', letterSpacing:0}}>Sunday 10 March - 16:30pm</Text>
            </View>
            </View>
            </View>
        </LinearGradient>
        <View style={{justifyContent:'center',alignItems:'flex-start', margin:10,height:0.06*windowHeight,width:windowWidth}}>
            <Text style={{opacity:0.55,color: '#000000',}}>{utility.t('whoinvite')}</Text>
        </View>
        <View 
            style={{justifyContent:'center',alignItems:'center',width:windowWidth,height:0.5*windowHeight,flexDirection:'row'}}>
            <PeopleList value={false}/>
        </View>
       

        <TouchableOpacity onPress={() => this.props.navigation.navigate('eventDetail')}>
                <Image style={{height:0.076*windowHeight}}  source={require('../assets/Sliced/buttonBar.png')}></Image>
                <View style={styles.textView}><Text style={styles.buttonText}>{utility.t('send')}</Text></View>
        </TouchableOpacity>
        

        </View>
      );
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center', // flex-start, center, flex-end, stretch
      flexDirection: 'column',
      //justifyContent: 'space-between',
      paddingTop: Constants.statusBarHeight,
      //justifyContent: 'center', // flex-start, center, flex-end, space-around, space-between, space-evenly
    },
    header: {
      //paddingTop: Constants.statusBarHeight,
      marginTop: 5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        height: 0.17 * windowHeight, 
        width: 0.86 * windowWidth,
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#D3D3D3',
        justifyContent:'center',
        alignItems:'center',
    },

      textView: {
        position: 'absolute',
        left: 0,
        top: 0,
        right:0,
        bottom:0,
        alignItems: 'center', 
        justifyContent: 'center',
      },

      buttonText: {
        fontFamily: 'System',
        fontSize: 14,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#FFFFFF'
      },
  });
  