import React from 'react';
import {createDrawerNavigator, createSwitchNavigator, createStackNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
import Splash from './components/Splash'
import Login from './components/Login'
import event from './components/EventDetail'
import create from './components/CreateEvent'
import create2 from './components/CreateEvent2'
import testScreen from './components/testscreen'
import card from './components/CardHori'
import invitePending from './components/InvitePending'
import invitation from './components/InvitationsDetail'
import write from './components/writeTable'
//import testscreen from './components/testscreen'
import { Facebook } from 'expo';

const homeStack = createDrawerNavigator(
  {homeSreen: HomeScreen,
    invitationDetail:invitation,
    createEvent:create, 
    createEvent2:create2,
    eventDetail: event,
    cardHori: card
  }) 
const authStack = createDrawerNavigator({login: Login})
const writeStack = createDrawerNavigator({writeTable: write})

// const createEventStack = createDrawerNavigator(
//   {
//     createEvent:create, 
//     createEvent2:create2,
//   }
// )
const AppContainer = createAppContainer(
  createSwitchNavigator({
    spl: Splash,
    home: homeStack,
    auth: authStack,
    w: writeStack
    
  },
  {
    // initialRouteName: 'createEvent2'

    initialRouteName: 'home'

  }
  ))



 export default AppContainer;



