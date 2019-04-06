import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, DatePickerIOS, TextInput } from 'react-native';
import { Constants, LinearGradient, } from 'expo'
import utility from './language.utility'
import EventHeader from './EventHeader'
import MapView from 'react-native-maps'
//import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        chosenDate: new Date(),
        time: new Date().toLocaleString("en-US",{timeZone:"America/New_York"}),
        month: new Date().toLocaleString("en-US", {month: "long"}),
        mapRegion: null,
        //hasLocationPermissions: false,
        valueInput: '',
        showCurrent: false
      };
      this.setDate = this.setDate.bind(this);
    }


  setDate(newDate) {
    var ti = newDate.toLocaleString("en-US",{timeZone:"America/New_York"})
    var mon = newDate.toLocaleString("en-US", {month: "long"})
    this.setState({chosenDate: newDate, time:ti, month: mon});
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({mapRegion: { latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 }});
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
      );
  }

  handlePress(){
    this.props.navigation.navigate('createEvent2', {location: this.state.valueInput, time: this.state.time, month: this.state.month})
  }
  
  handleLocationPin(){
    this.setState({showCurrent: true})
  }

  render() {
    if (this.state.valueInput !== null){
      console.log(this.state.valueInput)
    }
    console.log(this.state.time)
        return (
          <View style={styles.container}>
          <EventHeader navigation={this.props.navigation} value={false} />
          {/* <LinearGradient 
                  style={{width: windowWidth, height:  0.22 * windowHeight, flex: 1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}
                  colors={['#FFFFFF', '#B0C4DE']}
                  start={ [1, 0] }
                  end={ [1, 1] }
                  > */}
              <View style={{width: windowWidth, height:  0.22 * windowHeight, flex: 1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
              <View style={{flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
              
              <View style={styles.card}>

              <View style={styles.pickTime}>
              <View style={{width: 0.86 * windowWidth, height: 0.05 * windowHeight, alignItems:'center',justifyContent:'center',}}>
              <Text style={{fontFamily: 'System', fontSize: 14, letterSpacing: 0, textAlign: 'center', opacity:0.5, }}>What time is dinner?
              </Text>
              </View>
              <DatePickerIOS
                date={this.state.chosenDate}
                onDateChange={this.setDate}
                mode={'datetime'}
                style={{marginTop:-20,}}
              />
              </View>
              <View style={styles.pickLocation}>
              <View style={{ width: 0.86 * windowWidth, height: 0.05 * windowHeight, alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontFamily: 'System', fontSize: 14, letterSpacing: 0, textAlign: 'center', opacity:0.5, }}>Choose a location
              </Text>
              </View>
              <View style={{width: 0.86 * windowWidth, height: 0.05 * windowHeight, flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.handleLocationPin()}>
              <Image style={{height: 0.02 * windowHeight, width: 0.015 * windowHeight, marginLeft: 0.015 * windowHeight, marginBottom: 0.016 * windowHeight }} source={require('../assets/Sliced/location.png')}></Image>
              </TouchableOpacity>
              <TextInput
                 style = {{width: 0.72 * windowWidth, height: 0.05 * windowHeight, fontFamily: 'System', fontSize: 20, letterSpacing: 0, textAlign: 'center', marginLeft: 0.015 * windowHeight, marginBottom: 0.016 * windowHeight}}
                //  placeholder = "Type location here!"
                 onChangeText={(text)=>this.setState({valueInput: text})} 
              />
              </View>    
              </View>

              </View>

              <View style = {styles.map}>
              {/* <GooglePlacesAutocomplete
                place
              /> */}


              <MapView  
            style={{alignSelf: 'stretch', height: 0.41 * windowHeight}}
            // initialRegion={{
            //     latitude: this.state.mapRegion.latitude,
            //     longitude:this.state.mapRegion.longitude,
            //     latitudeDelta: 0.1,
            //     longitudeDelta: 0.1
            //    }}>
            region = {this.state.mapRegion}
            >
            {
            (this.state.mapRegion !== null  ) && (this.state.showCurrent) &&
            <MapView.Marker
         coordinate={{"latitude":this.state.mapRegion.latitude,"longitude":this.state.mapRegion.longitude}}
         title={"Your Location"}
            />
            }
            </MapView>

              </View>

              </View>
              </View>

       
          {/* </LinearGradient> */}
         
  

          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('createEvent2')}> */}
          <TouchableOpacity onPress={() => this.handlePress()}>
                  <Image style={{height:0.076*windowHeight}}  source={require('../assets/Sliced/buttonBar.png')}></Image>
                  <View style={styles.textView}><Text style={styles.buttonText}>{utility.t('invitePeople')}</Text></View>
          </TouchableOpacity>
          
  
          </View>
        );
      }
    }


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
          paddingTop: Constants.statusBarHeight,
          },
        header: {
          marginTop: 5,
        },
        card: {
            backgroundColor: '#FFFFFF',
            height: 0.39 * windowHeight, 
            width: 0.86 * windowWidth,
            flexDirection: 'column',
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: '#D3D3D3',
            justifyContent:'center',
            alignItems:'center',
        },
        map: {
          height: 0.41 * windowHeight, 
          width: windowWidth,
          flexDirection: 'column',
          justifyContent:'center',
          alignItems:'center',
          // backgroundColor: 'red'
        },
        pickTime: {
          height: 0.29 * windowHeight, 
          width: 0.86 * windowWidth,
          flex: 1,
          overflow:'hidden', 
          borderBottomWidth:0.5,
          borderBottomColor: '#D3D3D3'
        },
        pickLocation: {
          height: 0.1 * windowHeight, 
          width: 0.86 * windowWidth,
         
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
      