import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, DatePickerIOS } from 'react-native';
import { Constants, LinearGradient, MapView } from 'expo'
import utility from './language.utility'
import EventHeader from './EventHeader'
//import DateTimePicker from 'react-native-modal-datetime-picker';



var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {chosenDate: new Date()};
      this.setDate = this.setDate.bind(this);
    }


  setDate(newDate) {
    this.setState({chosenDate: newDate});
    //console.log(newDate.getMonth())
    var time = newDate.toLocaleString("en-US",{timeZone:"America/New_York"})
    var month = newDate.toLocaleString("en-US", {month: "long"})
  }

  render() {
    //console.log(this.state.chosenDate)
    const params = this.props.navigation.state.params
    // console.log(params)
        return (
          <View style={styles.container}>

          <EventHeader navigation={this.props.navigation} value={false} edit={false}/>
          
          <LinearGradient 
                  style={{width: windowWidth, height:  0.22 * windowHeight, flex: 1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}
                  colors={['#FFFFFF', '#B0C4DE']}
                  start={ [1, 0] }
                  end={ [1, 1] }
                  >
            
  
          <View style={styles.card}>
            <View style={styles.top}>
            <Image style={styles.avatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
            <Text style={{fontSize:20}}>{params.invitePending.location}</Text>
            <Text style={{fontSize:13,paddingTop:1}}>{params.invitePending.time}</Text>
            <Text style={{fontSize:13,opacity:0.5,paddingTop: 6,fontWeight:'bold'}}>{utility.t('hostby')} {params.inviter.name}</Text>
            </View>
            <View style={styles.bottom}>
              <View style={styles.bottomLeft} >
                <Image style={styles.cross} source={require('../assets/Sliced/cross.png')}></Image>
                <Text style={{fontFamily: 'System',color: '#FF3B3B', fontSize:14, paddingLeft: 0.02 * windowWidth}}>{utility.t('decline')}</Text>
              </View>
              <View style={styles.bottomRight} >
                <Image style={styles.check} source={require('../assets/Sliced/check.png')}></Image>
                <Text style={{fontFamily: 'System',color: '#38D459', fontSize:14, paddingLeft: 0.02 * windowWidth}}>{utility.t('accept')}</Text>
              </View>
            </View>
        
          </View>

       
          </LinearGradient>
         
  
          
          <View style={{width:windowWidth,height:0.52*windowHeight,backgroundColor:'yellow'}}>

          </View>
          
  
          </View>
          //
        );
      }
    }


    const styles = StyleSheet.create({
      container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,  
        flexDirection: 'column',
         
      },
      card: {
        backgroundColor: 'white',
        height: 0.34 * windowHeight, 
        width: 0.92 * windowWidth,
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#D3D3D3'
      }, 
      top: {
          width: 0.92 * windowWidth,
          height: 0.24 * windowHeight,
          borderBottomWidth: 0.5,
          borderBottomColor: '#D3D3D3',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly'
      },
      bottom: {
          flexDirection: 'row',
          width: 0.92 * windowWidth,
          height: 0.1 * windowHeight,
      },
      bottomLeft:{
          width: 0.46 * windowWidth,
          height: 0.1 * windowHeight,
          borderRightWidth: 0.5,
          borderRightColor: '#D3D3D3',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
      },
      bottomRight: {
          width: 0.46 * windowWidth,
          height: 0.1 * windowHeight,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
         
      },
      cross:{
          width: 14,
          height: 14
      },
      check:{
          width: 14,
          height: 14
      },
      avatar:{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width: 0.076 * windowHeight,
          height: 0.076 * windowHeight,
          backgroundColor:'#fff',
          borderRadius: 0.076 * windowHeight/2,
        }
      }
      )
  