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

const homeStack = createDrawerNavigator(
  {
    homeSreen: HomeScreen,
    //invitationDetail: invitation,
    createEvent:create, 
    createEvent2:create2,
    eventDetail: event
  }) 
const authStack = createDrawerNavigator({login: Login})
const createEventStack = createDrawerNavigator(
  {
    createEvent2:create2,
    createEvent:create, 
    
  }
)

const AppContainer = createAppContainer(
  createSwitchNavigator({
    spl: Splash,
    home: homeStack,
    auth: authStack,
    create: createEventStack
  },
  {
    // initialRouteName: 'createEvent2'
    initialRouteName: 'create'
  }
  ))

 export default AppContainer;



