import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Animated, ImageBackground } from 'react-native';
import utility from './language.utility'
//import I18n from 'react-native-i18n';



export default class Splash extends React.Component {
    _isMounted = false;

    constructor(props){
        super(props)
        this.state = {
          fadeAnim: new Animated.Value(0),
          fadeAnim2: new Animated.Value(0),
          fadeAnim3: new Animated.Value(0),
        }
        
    }
    fadeIn(anim){
      Animated.timing(          // Animate over time
        anim,    // The animated value to drive
        {
          toValue: 1,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
        }
      ).start(()=>this.fadeOut(anim));                // Starts the animation
    }


    fadeOut(anim){
      if (this._isMounted) {
      this.setState({anim: new Animated.Value(1)})
      }
      Animated.timing(          // Animate over time
        anim, // The animated value to drive
        {
          toValue: 0,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
        }
      ).start(()=>this.fadeIn2(this.state.fadeAnim2));                // Starts the animation
    }

    fadeIn2(anim){
      Animated.timing(          // Animate over time
        anim,    // The animated value to drive
        {
          toValue: 1,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
        }
      ).start(()=>this.fadeOut2(anim));                // Starts the animation
    }


    fadeOut2(anim){
      if (this._isMounted) {
      this.setState({anim: new Animated.Value(1)})
      }
      Animated.timing(          // Animate over time
        anim, // The animated value to drive
        {
          toValue: 0,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
        }
      ).start(()=>this.fadeIn3(this.state.fadeAnim3));                // Starts the animation
    }

    fadeIn3(anim){
      Animated.timing(          // Animate over time
        anim,    // The animated value to drive
        {
          toValue: 1,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
        }
      ).start(()=>this.fadeOut3(anim));                // Starts the animation
    }


    fadeOut3(anim){
      if (this._isMounted){
      this.setState({anim: new Animated.Value(1)})
      }
      Animated.timing(          // Animate over time
        anim, // The animated value to drive
        {
          toValue: 0,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
        }
      ).start();                // Starts the animation
    }

    componentWillMount() {
      this.fadeIn(this.state.fadeAnim)
    }
    componentDidMount() {
      this._isMounted = true
      this.timerId = setInterval(()=>this.fadeIn(this.state.fadeAnim),6000)
    }

    componentWillUnmount(){
      this._isMounted = false
      // clearInterval(this.timerId)
    }
    

    render() {
      let {fadeAnim} = this.state;
      let {fadeAnim2} = this.state;
      let {fadeAnim3} = this.state;
        return (
          <View style={styles.container}>
              <View style={styles.images}>
              <Image style={styles.logo} source={require('../assets/Sliced/Ovals.png')} />
              <Animated.Image style={[styles.people1, {opacity: fadeAnim}]} source={require('../assets/Sliced/Page1.png')} />
              <Animated.Image style={[styles.people2, {opacity: fadeAnim2}]} source={require('../assets/Sliced/Page2.png')} />
              <Animated.Image style={[styles.people3, {opacity: fadeAnim3}]} source={require('../assets/Sliced/Page3.png')} />
              </View>
              <View style={styles.title}>
              <Text style={styles.dindin}>{utility.t('dindin')}</Text>
              <Text style={styles.subtitle}>{utility.t('connectFood')}</Text>
              </View>
              <View style={styles.start}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('auth')}>
                <Image style={styles.buttonBar} source={require('../assets/Sliced/buttonBar.png')}></Image>
                <View style={styles.textView}><Text style={styles.buttonText}>{utility.t('getStarted')}</Text></View>
              </TouchableOpacity>
              </View>
          </View>
        )
      }
}

var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center', 
      
    },
    images: {
      top: 90,
      alignItems: 'center', 
      justifyContent: 'center', 
    },
    title: {
      bottom: 60
    },

    logo:{
      height:259,
      width:259,
    },
    dindin: {
      fontFamily: 'System',
      fontSize: 29,
      color: '#353535',
      letterSpacing: 0,
      textAlign: 'center',
      
    },
    subtitle: {
      opacity: 0.5,
      fontFamily: 'System',
      fontSize: 14,
      color: '#000000',
      letterSpacing: 0,
      textAlign: 'center',
      paddingTop: 8
    },
    start: {
      position: 'absolute',
      alignItems: 'center', 
      justifyContent: 'center',
      bottom: 0,
      height: 0.076*windowHeight,
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
    buttonBar: {
      width: windowWidth,
      height: 0.076*windowHeight,
    },
    buttonText: {
      fontFamily: 'System',
      fontSize: 14,
      letterSpacing: 0,
      textAlign: 'center',
      color: '#FFFFFF'
    },
    people1: {
      width: 54,
      height: 57.18,
      left: 60,
      bottom: 60
    }, 
    people2: {
      width: 67,
      height: 72, 
      left: 60,
      bottom: 300
    },
    people3: {
      width: 73,
      height: 80,
      right: 90,
      bottom: 300
    }
    
  
  })