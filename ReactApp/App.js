import React from 'react';
import {createDrawerNavigator, createSwitchNavigator, createStackNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
import Splash from './components/Splash'
import Login from './components/Login'
import event from './components/EventDetail'
import create from './components/CreateEvent'
import create2 from './components/CreateEvent2'
import cardHori from './components/CardHori'
import invitePending from './components/InvitePending'
//import testscreen from './components/testscreen'
import { Facebook } from 'expo';

const homeStack = createDrawerNavigator({home: HomeScreen}) 
const authStack = createDrawerNavigator({login: Login})
const eventStack = createDrawerNavigator({eventDetail: event})
const createStack = createDrawerNavigator({createEvent: create})
const createStack2 = createDrawerNavigator({createEvent2:create2})
// const cardStack = createDrawerNavigator({card: cardHori})
// const pendingStack = createDrawerNavigator({pending: invitePending})

const AppContainer = createAppContainer(
  createSwitchNavigator({
    spl: Splash,
    home: homeStack,
    auth: authStack,
    eventDetail: eventStack,
    createEvent: createStack,
    createEvent2: createStack2,
    // card: cardStack,
    // pending: pendingStack
  },
  {
    initialRouteName: 'createEvent'
  }
  ))

 export default AppContainer;



