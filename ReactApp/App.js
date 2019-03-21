import React from 'react';
import {createDrawerNavigator, createSwitchNavigator, createStackNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './components/HomeScreen';
import Splash from './components/Splash'
import Login from './components/Login'
import { Facebook } from 'expo';


// let result = async function handleFacebookLogin() {
//   try {
//     const { type, token } = await Facebook.logInWithReadPermissionsAsync(
//       '818762215127916', 
//       { permissions: ['public_profile'] }
//     );
//     //console.log(type + " "+ token)

//     switch (type) {
//       case 'success': {
//         // Get the user's name using Facebook's Graph API
//         const response = await fetch(
//           `https://graph.facebook.com/me?access_token=${token}`
//         );
//         const profile = await response.json();
//         return 'home'
//       }
//       default: {
//         return 'spl'
//       }
//     }
//   }
//   catch (e) {
//   return 'home'
// }
// }

const homeStack = createDrawerNavigator({home: HomeScreen}) 
const authStack = createDrawerNavigator({login: Login});
const AppContainer = createAppContainer(
  createSwitchNavigator({
    spl: Splash,
    home: homeStack,
    auth: authStack
  },
  {
    initialRouteName: 'spl'
  }
  ))


export default AppContainer;

// export default class App extends React.Component {
  
//   render() {
//     return (
//       <AppContainer persistenceKey={"NavigationState"} />
//     );
//   }
// }


