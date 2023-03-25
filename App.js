import React, { Component } from 'react';
import  { View, Text, Image, StyleSheet } from 'react-native';
import logo from './assets/snack-icon.png';
class App extends Component {
 render(){
   return(
     <View style={style.container}>
      <View style={style.container1}>
       <Text style={style.textdesign}>"Hello World"</Text>
       <Image source={logo} style={style.imgDesign}/>
       </View>
      </View>


 
   )
  }
};

const style = StyleSheet.create({
  imgDesign:{
    width: 50,
    height: 50,
  },

  container: {
    Flex: 1,
    backgroundColor: "#8F00FF",
    alignItems: 'center',
  },
  container1: {
    backgroundColor: "#FFC0CB" ,
  },
  textdesign: {
    fontSize: 50,
    color: "#FFF",
    fontWeight: 'bold',
  },
  textlogo: {
    fontSize: 50,
    color: "#FFF",
    fontWidth: 50,
  },
});

export default App;