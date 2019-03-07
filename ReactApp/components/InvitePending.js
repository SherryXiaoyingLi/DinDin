import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import CardHori from './CardHori'
import {  LinearGradient} from 'expo';

var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

export default class InviteHoriScroll extends React.Component{
    constructor(prop){
        super(prop)
        this.state ={
            podCastList: null
        }
    }
    
    async getPodCastData(){
        let response = await fetch("https://www.cs.virginia.edu/~dgg6b/Mobile/PodCast/podCastList.json")
        let extractedJson = await response.json()
        this.setState({
            podCastList: extractedJson.podCastList
        })
    }

    componentWillMount(){
        this.getPodCastData()
    }
    

    keyExtractor(item){
        return item.id.toString()
    }

    renderRow({item}){
        return(
            <View style={styles.rowContainer}>
                <View style={styles.podCastContainer}>
                    <CardHori/>
                </View> 
            </View>
        )
    }

    render(){
        if(this.state.podCastList !== null){
        return(
            <View style={styles.container}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{width: windowWidth, height:  0.3 * windowHeight, flex: 1}}
                start={[1,1]}
                end={[0.4, 0.3]} >

                <View style={[styles.container, {alignItems:'center'}]}>
                <View style={[styles.titleSection, {left: -0.4 * windowWidth}]}>
                    <Text style={styles.title}> PENDING</Text>
                </View>
                <View style={{height: 0.22 * windowHeight, width: 0.92 * windowWidth, }}>
                 <FlatList 
                    style={styles.ScollablePodCasts}
                    data={this.state.podCastList}
                    renderItem={this.renderRow}
                    keyExtractor={this.keyExtractor}
                    horizontal={true}
                /> 
                </View>
                </View>

                </LinearGradient>
            </View>
        )
        }else{
            return(<View style={{flex:1}}/>)
        }
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 0.84,
            flexWrap: 'wrap',
            flexDirection:'column',
            height:  0.3 * windowHeight,
        },
        titleSection:{
            height: 29,
            flexDirection:'row', 
            justifyContent: 'space-between',
            alignItems:'center',
            
        },
        title: {
            fontSize: 14,
            fontFamily: 'System',
            opacity: 0.8,
            color: '#000000',
            letterSpacing: 0,
            //padding: 18,
        },

        ScollablePodCasts:{
            // width: 0.92 * windowWidth, 
            // height: 0.22 * windowHeight,
            backgroundColor: 'gray',
            
            },

        rowContainer:{
            flexDirection:'column', 
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 15
        },

        podCastContainer:{
            flexDirection:'row', 
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        podCastTile:{
            fontSize: 14,
            color: "#FFFFFF",
            letterSpacing: -0.15,
            textAlign: "left",
            paddingTop: 10
        }, 

        card: {
            backgroundColor: '#FFFFFF',
            height: 0.2 * windowHeight, 
            width: 0.86 * windowWidth,
        }

    }
)