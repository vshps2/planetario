import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';

export default class Homescreen extends Component{  
  render(){
    return(
      <View style={inicio.container}>
        <SafeAreaView style={inicio.ajuste}/>
          <ImageBackground source={require('../assets/bg.png')}>  
          <View>
            <Text style={inicio.title}>Localizacion de la EEI</Text>
          </View>

          <TouchableOpacity style={inicio.homebutton}> 
              <Text style={inicio.button_text}>Localizacion de la EEI</Text>             
           </TouchableOpacity>
           <TouchableOpacity style={inicio.homebutton}> 
              <Text style={inicio.button_text}>       Meteoros</Text>
           </TouchableOpacity>
           
          </ImageBackground>
      </View>
      
    );
  }
}


const inicio=StyleSheet.create({
    container:{
      flex:1,
    },
    ajuste:{
      marginTop:Platform.OS==='android'? StatusBar.currentHeight:0
    },
    title:{
      flex:0.15,
      justifyContent:'center',
      color:'#9400d3',
      alignItems:'center',
      fontSize:40,
      fontWeight:'bold'
    },
    homebutton:{
      flex:0.25,
      marginLeft:100,
      marginRight:100,
      marginTop:100,
      borderRadius:30,
      backgroundColor:'#fffff0',
      justifyContent:'center',
    },
     button_text:{
      flex:0.15,
      justifyContent:'center',
      color:'#9400d3',
      alignItems:'center',
      fontSize:17,
      fontWeight:'bold',
    },
  }
);

