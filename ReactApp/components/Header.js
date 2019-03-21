import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo'

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>{this.props.navigation.toggleDrawer()}}>
                <Image style={styles.left} source={require('../assets/Sliced/sidemenubtn.png')}/>
            </TouchableOpacity><Text style={styles.text}>DinDin</Text>
            <Image source={require('../assets/Sliced/searchbtn.png')} style={styles.right}></Image>
        
        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      height: 48,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
    },
    
    text: {
      flexDirection: 'row',
      fontSize: 17,
      fontFamily: 'System',
      color: '#353535',
      letterSpacing: 0,
      textAlign: 'center'

    },
    left: {
        margin: 16,
        width: 15,
        height: 16
    },
    right:{
        margin: 16,
        width: 15,
        height: 16
    }
  });