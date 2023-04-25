import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/home';
import Locationscreen from './screens/locationscreen';
import Meteoroscreen from './screens/meteoroscreen';
import Updatescreen from './screens/updatescreen';

const Stack = createNativeStackNavigator();

export default function app() {
  return(
   <NavigationContainer>
   <Stack.Navigator initialRoutName="Home" screenOptions = {{headerShow:false}}>
   <Stack.Screen name= 'Home' component = {Homescreen}/>
   <Stack.Screen name= 'location' component = {Locationscreen}/>
   <Stack.Screen name= 'Metoro' component = {Meteoroscreen}/>
   <Stack.Screen name= 'Update' component = {Updatescreen}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

