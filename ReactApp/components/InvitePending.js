import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, } from 'react-native';
import { Constants } from 'expo'

export default class InviteHoriScroll extends React.Component{
    constructor(){
        super()
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
        console.log(item.row[0].image)
        return(
            <View style={styles.rowContainer}>
                <View style={styles.podCastContainer}>
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
                <View style={styles.titleSection}>
                    <Text style={styles.title}> PENDING</Text>
                </View>
                 <FlatList 
                    style={styles.ScollablePodCasts}
                    data={this.state.podCastList}
                    renderItem={this.renderRow}
                    keyExtractor={this.keyExtractor}
                    horizontal={true}
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
        conatiner:{
            flex:1,
            flexDirection:'row',
            justifyContent: 'space-between',
            padding:20,
        },
        titleSection:{
            height: 29,
            flexDirection:'row', 
            justifyContent: 'space-between',
            alignItems:'center'
        },
        title: {
            fontSize: 24,
            color: "black",
            letterSpacing: 0.35,
            textAlign: "left",
        },

        dotdot:{
            paddingLeft: 10
        },

        ScollablePodCasts:{
            height: 100,
            width: '80%',
            backgroundColor:'gray',
            },

        rowContainer:{
            flexDirection:'column', 
            justifyContent: 'space-between',
            padding: 15
        },

        podCastContainer:{
            flexDirection:'row', 
            justifyContent: 'space-evenly',
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
            height: 128, 
            width: 128,
        }

    }
)