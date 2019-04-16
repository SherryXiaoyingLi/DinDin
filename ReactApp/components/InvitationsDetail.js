import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, DatePickerIOS } from 'react-native';
import { Constants, LinearGradient } from 'expo'
import utility from './language.utility'
import EventHeader from './EventHeader'
import firebase from '../constants/firebase'
import MapView from 'react-native-maps'


var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height
var db = firebase.database()
var leadsRef_Users = db.ref('UsersTable');
var leadsRef_Accepted = db.ref('Accepted/');
var leadsRef_Pending = db.ref('Pending')


export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        chosenDate: new Date(),
        mapRegion: null,
      };
      this.setDate = this.setDate.bind(this);
      
    }


  setDate(newDate) {
    this.setState({chosenDate: newDate});
    //console.log(newDate.getMonth())
    var time = newDate.toLocaleString("en-US",{timeZone:"America/New_York"})
    var month = newDate.toLocaleString("en-US", {month: "long"})
  }

  async handleAccept(invitePending){
    await leadsRef_Accepted.push(
        {
            inviter: invitePending.inviter,
            location: invitePending.location,
            time: invitePending.time,
            month: invitePending.month, 
        }
    )
    await leadsRef_Pending.child(invitePending.id).remove()
    // this.props.navigation.navigate('home')
}

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({mapRegion: { latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 }});
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
    );
    this.handleLocationPin()
    // this.geturl('images/4.jpg')
    
  }


  handleLocationPin(){
    this.setState({showCurrent: true})
  }

  async handleDecline(invitePending){
    let leadsRef_Pending_month = db.ref("Pending/"+invitePending.month)
    await leadsRef_Pending_month.child(invitePending.id).remove()
}

  findUser(array, id){
    return array.find(function(element){
      return element.id == id
    })
  }
  async handleAccept(inviter, invitePending){
    await leadsRef_Accepted.push(
      {
          inviter: invitePending.inviter,
          location: invitePending.location,
          time: invitePending.time,
          month: invitePending.month, 
      }
    )
  let leadsRef_Pending_month = db.ref("Pending/"+invitePending.month)
  await leadsRef_Pending_month.child(invitePending.id).remove()
  }

  keyExtractor(item){
    return item.id.toString()
  }
 

  render() {
    //console.log(this.state.chosenDate)
    const params = this.props.navigation.state.params
    var uId = this.keyExtractor(params.inviter)
    var imgl = params.inviter.img

    
    console.log('img end')
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
 
            <Image style={styles.avatar} source={{uri: imgl}}/>
            <Text style={{fontSize:20}}>{params.invitePending.location}</Text>
            <Text style={{fontSize:13,paddingTop:1}}>{params.invitePending.time}</Text>
            <Text style={{fontSize:13,opacity:0.5,paddingTop: 6,fontWeight:'bold'}}>{utility.t('hostby')} {params.inviter.name}</Text>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity onPress={() => this.handleDecline(item)}>
              <View style={styles.bottomLeft} >
                <Image style={styles.cross} source={require('../assets/Sliced/cross.png')}></Image>
                <Text style={{fontFamily: 'System',color: '#FF3B3B', fontSize:14, paddingLeft: 0.02 * windowWidth}}>{utility.t('decline')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleAccept(item_inviter, item)}>
              <View style={styles.bottomRight} >
                <Image style={styles.check} source={require('../assets/Sliced/check.png')}></Image>
                <Text style={{fontFamily: 'System',color: '#38D459', fontSize:14, paddingLeft: 0.02 * windowWidth}}>{utility.t('accept')}</Text>
              </View>
            </TouchableOpacity>
            </View>
        
          </View>

       
          </LinearGradient>
         
  
          

          <View style = {styles.map}>
              {/* <GooglePlacesAutocomplete
                place
              /> */}


              <MapView  
            style={{alignSelf: 'stretch', height: 0.52 * windowHeight}}
  
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
      map: {
        width:windowWidth,
        height:0.52*windowHeight,
        backgroundColor:'yellow'
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
  