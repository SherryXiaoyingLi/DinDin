import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './components/HomeScreen';

const rootStack = createDrawerNavigator({
  Home: HomeScreen,
  //Player: PlayerScreen
},{
  initalRouteName: 'Home'
}
) 

const AppContainer = createAppContainer(rootStack)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer persistenceKey={"NavigationState"} />
    );
  }
}
