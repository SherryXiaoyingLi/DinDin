import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class Splash extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
          <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/Sliced/Illustration.png')} />
            
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Image source={require('../assets/Sliced/getStarted.png')}></Image>
              </TouchableOpacity>
            
          </View>
        )
      }
}

const styles = StyleSheet.create({
    gradientStyles:{
     flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo:{
      height:300,
      width:300,
      
    },
    container: {
      flex: 1,
      alignItems: 'center', // flex-start, center, flex-end, stretch
      justifyContent: 'center', // flex-start, center, flex-end, space-around, space-between, space-evenly
    },
  
  
  })