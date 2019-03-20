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

// persistent key: so it stay on the last screen you are on
// navigation is part of the props of the this
//

// asychronouns requests that have tokens assciocated with your app

const AppContainer = createAppContainer(rootStack)


export default class App extends React.Component {
  
  render() {
    return (
      <AppContainer persistenceKey={"NavigationState"} />
    );
  }
}
