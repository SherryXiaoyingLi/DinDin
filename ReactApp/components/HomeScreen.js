import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo'

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require('../assets/Sliced/sidemenubtn.png')}></Image>
          <Image source={require('../assets/Sliced/searchbtn.png')}></Image>
        </View>
        
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
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
  }
});
