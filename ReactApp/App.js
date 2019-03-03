import React from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
// import PlayerScreen from './components/PlayerScreen'
import Splash from './components/Splash'


const rootStack = createDrawerNavigator({
    spl: Splash,
    Home: HomeScreen
  },{
    initialRouteName: 'spl'
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
