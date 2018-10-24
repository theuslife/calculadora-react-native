import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Button extends Component {

  constructor(props){
    super(props);
    this.state = {}

    let flexValue = 1; 
    if(props.flexValue)
        flexValue = parseInt(this.props.flexValue);


    let bgColor = '#E0E0E0';
    if(props.bgColor){
      bgColor = props.bgColor
    }

    let colorText = 'black';
    if(props.colorText){
      colorText = props.colorText
    }

    this.style = StyleSheet.create({
      areaButton: {
          flex: flexValue,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          backgroundColor: bgColor,
          borderColor: '#999999'
      },
      txt: {
          fontSize: 15,
          color: colorText,
          fontWeight: 'bold'
      }

    });

  }  

  render() {
    return(
      <TouchableOpacity style={this.style.areaButton}>
          <Text style={this.style.txt}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }

}


export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
          <View style={styles.row}>
            <Text></Text>
          </View>
          <View style={styles.row}>
              <Button text='AC' flexValue='3'></Button>
              <Button text='/' bgColor='#FFA500' colorText='white'></Button>
          </View>
          <View style={styles.row}>
              <Button text='7'></Button>
              <Button text='8'></Button>
              <Button text='9'></Button>
              <Button text='*' bgColor='#FFA500' colorText='white'></Button>
          </View>
          <View style={styles.row}>
              <Button text='4'></Button>
              <Button text='5'></Button>
              <Button text='6'></Button>
              <Button text='-' bgColor='#FFA500' colorText='white'></Button>
          </View>
          <View style={styles.row}>
              <Button text='1'></Button>
              <Button text='2'></Button>
              <Button text='3'></Button>
              <Button text='+' bgColor='#FFA500' colorText='white'></Button>
          </View>
          <View style={styles.row}>
              <Button text='0' flexValue='2'></Button>
              <Button text=','></Button>
              <Button text='=' bgColor='#FFA500' colorText='white'></Button>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});
