import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, FlatList} from 'react-native';
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
      },
      {
        "name": "Android",
      },
      {
        "name": "iOS",
      },
      {
        "name": "React Native",
      }
    ]}
 
    
}
handleChange = (index) => {
  let checked = [...this.state.checked];
  checked[index] = !checked[index];
  this.setState({ checked });
}

  

  render() {
    let { data, checked } = this.state;
    return (
      <FlatList
      data={data}
      extraData={this.state}
      renderItem={({ item, index }) =>
        <CheckBox
          center
          title={item.name}
          onPress={() => this.handleChange(index)}
          checkedIcon='check-circle'
          uncheckedIcon='circle-o'
          fontFamily='System'
          checked={checked[index]} />
      }
    />
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
