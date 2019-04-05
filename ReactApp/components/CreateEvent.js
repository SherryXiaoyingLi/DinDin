import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, DatePickerIOS } from 'react-native';
import { Constants, LinearGradient, MapView } from 'expo'
import utility from './language.utility'
import EventHeader from './EventHeader'
//import DateTimePicker from 'react-native-modal-datetime-picker';
import MapComponent from './MapComponent'


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
        return (
          <View style={styles.container}>
          {/* <MapView style= {styles.container}>
              style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}> */}
          <EventHeader navigation={this.props.navigation} value={false} />
          <LinearGradient 
                  style={{width: windowWidth, height:  0.22 * windowHeight, flex: 1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}
                  colors={['#FFFFFF', '#B0C4DE']}
                  start={ [1, 0] }
                  end={ [1, 1] }
                  >
              <View style={{width: windowWidth, height:  0.22 * windowHeight, flex: 1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
              <View style={{flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
              <View style={styles.card}>
              <View style={styles.pickTime}>
              <View style={{width: 0.86 * windowWidth, height: 0.05 * windowHeight, alignItems:'center',justifyContent:'center',}}>
              <Text style={{fontFamily: 'System', fontSize: 14, letterSpacing: 0, textAlign: 'center', opacity:0.5, }}>What time is dinner?</Text>
              </View>
                <DatePickerIOS
              date={this.state.chosenDate}
              onDateChange={this.setDate}
              mode={'datetime'}
              style={{marginTop:-20,}}
              />
              </View>

              <View style={styles.pickLocation}>
              <View style={{width: 0.86 * windowWidth, height: 0.05 * windowHeight, alignItems:'center',justifyContent:'center',}}>
              <Text style={{fontFamily: 'System', fontSize: 14, letterSpacing: 0, textAlign: 'center', opacity:0.5, }}>Choose a location</Text>
              </View>
              </View>
              </View>

              <View style = {styles.map}>
                    <MapComponent/>
              </View>
                  </View>
                  {/* <View style = {styles.map}></View> */}
              
        {/* ></MapView> */}
              

              </View>

       
          </LinearGradient>
         
  

          <TouchableOpacity onPress={() => this.props.navigation.navigate('createEvent2')}>
                  <Image style={{height:0.076*windowHeight}}  source={require('../assets/Sliced/buttonBar.png')}></Image>
                  <View style={styles.textView}><Text style={styles.buttonText}>{utility.t('invitePeople')}</Text></View>
          </TouchableOpacity>
          
  
          </View>
          // </MapView>
        );
      }
    }


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          //alignItems: 'center', // flex-start, center, flex-end, stretch
          flexDirection: 'column',
          //justifyContent: 'space-between',
          paddingTop: Constants.statusBarHeight,
          //justifyContent: 'center', // flex-start, center, flex-end, space-around, space-between, space-evenly
        },
        header: {
          //paddingTop: Constants.statusBarHeight,
          marginTop: 5,
        },
        card: {
            backgroundColor: '#FFFFFF',
            height: 0.42 * windowHeight, 
            width: 0.86 * windowWidth,
            flexDirection: 'column',
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#D3D3D3',
            justifyContent:'center',
            alignItems:'center',
        },
        map: {
          height: 0.38 * windowHeight, 
          width: windowWidth,
          flexDirection: 'column',
          justifyContent:'center',
          alignItems:'center',
          //backgroundColor: 'red'
        },
        pickTime: {
          height: 0.29 * windowHeight, 
          width: 0.86 * windowWidth,
          flex: 1,
          //backgroundColor: 'red',
          overflow:'hidden', 
          borderBottomWidth:0.5,
          borderBottomColor: '#D3D3D3'
        },
        pickLocation: {
          height: 0.13 * windowHeight, 
          width: 0.86 * windowWidth,
          //backgroundColor: 'black'

        },
        textView: {
            position: 'absolute',
            left: 0,
            top: 0,
            right:0,
            bottom:0,
            alignItems: 'center', 
            justifyContent: 'center',
        },
        buttonText: {
            fontFamily: 'System',
            fontSize: 14,
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FFFFFF'
        },
          
      });
      