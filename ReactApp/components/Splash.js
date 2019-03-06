import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';


export default class Splash extends React.Component {
    

    constructor(props){
        super(props)
        this.state = {
          fadeAnim: new Animated.Value(0),
        }
        
    }
    fadeIn(){
      Animated.timing(          // Animate over time
        this.state.fadeAnim,    // The animated value to drive
        {
          toValue: 1,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
        }
      ).start(()=>this.fadeOut());                // Starts the animation
    }


    fadeOut(){
      this.setState({fadeAnim: new Animated.Value(1)})
      Animated.timing(          // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 0,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
        }
      ).start();                // Starts the animation
    }

    componentDidMount() {
      this.timerId = setInterval(()=>this.fadeIn(),2000)
    }
    

    render() {
      let {fadeAnim} = this.state;
        return (
          <View style={styles.container}>
              <View style={styles.images}>
              <Image style={styles.logo} source={require('../assets/Sliced/Ovals.png')} />
              <Animated.View style={{opacity: fadeAnim}}>
              <Image style={styles.people1} source={require('../assets/Sliced/Page1.png')} />
              <Image style={styles.people2} source={require('../assets/Sliced/Page2.png')} />
              <Image style={styles.people3} source={require('../assets/Sliced/Page3.png')} />
              </Animated.View>
              </View>
              <View style={styles.title}>
              <Text style={styles.dindin}>DinDin</Text>
              <Text style={styles.subtitle}>Connecting food lovers</Text>
              </View>
              <View style={styles.start}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Image source={require('../assets/Sliced/getStarted.png')}></Image>
              </TouchableOpacity>
              </View>
          </View>
        )
      }
}

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
      width: '100%',
      alignItems: 'center', 
      justifyContent: 'center',
      bottom: 0,
      height: 48
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