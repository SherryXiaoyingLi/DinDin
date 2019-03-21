import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { Constants } from 'expo'

var windowWidth = Dimensions.get('window').width
var windowHeight = Dimensions.get('window').height

export default class InviteVertiScroll extends React.Component{
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
                    <View style={styles.titleView}>
                    <Text style={{fontFamily: 'System', fontSize: 13, color: '#000000', letterSpacing: 0 }}>Thursday 7 March</Text>
                    </View>
                    <View style={styles.card}>
                    </View>
                </View> 
            </View>
        )
    }

    render(){
        if(this.state.podCastList !== null){
        return(
            <View style={styles.container}>
                 <FlatList
                    style={styles.ScollablePodCasts}
                    data={this.state.podCastList}
                    renderItem={this.renderRow}
                    keyExtractor={this.keyExtractor}
                /> 
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
            flex:1.5,
            flexDirection:'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            backgroundColor: '#FFFFFF'
        },

        ScollablePodCasts:{
            width: windowWidth,
            },

        rowContainer:{
            flexDirection:'row', 
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },

        podCastContainer:{
            flexDirection:'column', 
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        podCastTile:{
            fontSize: 14,
            color: "#FFFFFF",
            letterSpacing: -0.15,
            textAlign: "left",
            paddingTop: 0
        }, 
        card: {
            backgroundColor: '#FFFFFF',
            height: 0.12 * windowHeight, 
            width: windowWidth,
            borderBottomWidth: 0.5,
            borderBottomColor: '#D3D3D3',
            borderTopWidth: 0.5,
            borderTopColor: '#D3D3D3',
        },
        titleView: {
            width:windowWidth, 
            height:0.06 * windowHeight, 
            backgroundColor:'#FFFFFF', 
            flexDirection:'row', 
            justifyContent: 'space-between',
            alignItems:'center',
            padding: 12
        }


    }
)