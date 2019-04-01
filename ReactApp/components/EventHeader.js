import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Constants } from 'expo'
import utility from './language.utility'
import { createAppContainer, createStackNavigator } from 'react-navigation';

var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('home')}}>
                <Image style={styles.left} source={require('../assets/Sliced/back3x.png')}/>
            </TouchableOpacity><Text style={styles.text}>{utility.t('dindin')}</Text>
            <Text style={styles.edit}>{utility.t('edit')}</Text>
        
        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      height: 0.08*windowHeight,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
    },
    
    text: {
      flexDirection: 'row',
      fontSize: 24,
      textAlign: 'center'

    },
    left: {
        margin: 15,
        width: 15,
        height: 15
    },
    right:{
        margin: 10,
        width: 15,
        height: 15
    },
    edit: {
        margin:15,
        color: '#1e90ff',

    }
  });