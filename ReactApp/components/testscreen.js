import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, FlatList, Image} from 'react-native';
import { Constants } from 'expo';
import Dimensions from 'Dimensions';
import { CheckBox } from 'react-native-elements'
import '@expo/vector-icons';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      checked:[],
      data : [
      {
        "name": "ALL",
        'checked':true,
      },
      {
        "name": "Android",
        'checked':true,
      },
      {
        "name": "iOS",
        'checked':true,
      },
      {
        "name": "React Native",
        'checked':false,
      }
    ]}
 
    
}
handleChange = (index) => {
  let checked = [...this.state.checked];
  // console.log(checked)
  checked[index] = !checked[index];
  this.setState({ checked });
}

renderRow = ({item,index}) => {
  // console.log(item)
  console.log(this.state)
  return (
  <CheckBox
           title={item.name}
    checkedIcon={<Image source={require('../assets/Sliced/Selected.png')} style={{width:30,height:30}}/>}
    uncheckedIcon={<Image source={require('../assets/Sliced/Select.png')} style={{width:30,height:30}}/>}
    checked={this.state.checked[index]}
    onPress={() => this.handleChange(index)}
  />
  )
}
  

  render() {
    let { data, checked } = this.state;
    // console.log(this.state)
    // console.log(data)
    // console.log(checked)
    return (

      
      <FlatList
      data={data}
      extraData={this.state}
      renderItem={this.renderRow
      }
    />
  //   <View style={{alignItems:'center',justifyContent:'center'}}>
  //     <Text>{this.state.checked}</Text>
  //     <CheckBox
  //   checkedIcon={<Image source={require('../assets/Sliced/Selected.png')} style={{width:30,height:30}}/>}
  //   uncheckedIcon={<Image source={require('../assets/Sliced/Select.png')} style={{width:30,height:30}}/>}
  //   checked={this.state.checked[0]}
  //   onPress={() => this.setState({checked: [!this.state.checked[0]]})}
  // />
  // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
