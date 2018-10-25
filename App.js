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
          fontSize: 18,
          color: colorText,
          fontWeight: 'bold'
      }

    });

  }  

  render() {
    return(
      <TouchableOpacity style={this.style.areaButton} onPress={this.props.onPress}>
          <Text style={this.style.txt}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }

}

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      result: '0'
    }

    this.calculation = this.calculation.bind(this);

  }

  calculation(btn){
    let state = this.state;
    if(btn == 'AC'){2
      state.result = '0' 
    } else if (btn == '='){
      state.result = eval(state.result);
    } else {
      if(state.result == '0'){
        state.result = btn;
      } else {
        state.result += btn;
      }
    }

    this.setState(state);
  }

  render() {
    return (
      <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.result}>{this.state.result}</Text>
          </View>
          <View style={styles.row}>
              <Button text='AC' flexValue='3' bgColor='#CCCCCC' onPress={()=>{this.calculation('AC')}}></Button>
              <Button text='/' bgColor='#FFA500' colorText='white' onPress={()=>{this.calculation('/')}}></Button>
          </View>
          <View style={styles.row}>
              <Button text='7' onPress={()=>{this.calculation('7')}}></Button>
              <Button text='8' onPress={()=>{this.calculation('8')}}></Button>
              <Button text='9' onPress={()=>{this.calculation('9')}}></Button>
              <Button text='*' bgColor='#FFA500' colorText='white' onPress={()=>{this.calculation('*')}}></Button>
          </View>
          <View style={styles.row}>
              <Button text='4' onPress={()=>{this.calculation('4')}}></Button>
              <Button text='5' onPress={()=>{this.calculation('5')}}></Button>
              <Button text='6' onPress={()=>{this.calculation('6')}}></Button>
              <Button text='-' bgColor='#FFA500' colorText='white' onPress={()=>{this.calculation('-')}}></Button>
          </View>
          <View style={styles.row}>
              <Button text='1' onPress={()=>{this.calculation('1')}}></Button>
              <Button text='2' onPress={()=>{this.calculation('2')}}></Button>
              <Button text='3' onPress={()=>{this.calculation('3')}}></Button>
              <Button text='+' bgColor='#FFA500' colorText='white' onPress={()=>{this.calculation('+')}}></Button>
          </View>
          <View style={styles.row}>
              <Button text='0' flexValue='2' onPress={()=>{this.calculation('0')}}></Button>
              <Button text=',' onPress={()=>{this.calculation('.')}}></Button>
              <Button text='=' bgColor='#FFA500' colorText='white' onPress={()=>{this.calculation('=')}}></Button>
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
  },
  result: {
    flex: 1,
    fontSize: 50,
    textAlign: 'right',
    padding: 15
  }
});
