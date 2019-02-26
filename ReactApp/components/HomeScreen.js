import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.splashImg} source={require('./assets/Design/splash_variations/Splash.png')} />
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Player')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // flex-start, center, flex-end, stretch
    justifyContent: 'center', // flex-start, center, flex-end, space-around, space-between, space-evenly
  },
  splashImg: {
    width: 380,
    height: 820
  },
  text: {
    flexDirection: 'row',
  }
});
