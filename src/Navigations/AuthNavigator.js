import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, SafeAreaView,View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../Constants/RouteNames';
import Login from '../Screens/Login';
import Register from '../Screens/Register';




const AuthNavigator = () => {
    const AuthStack = createStackNavigator()
  return (
    
      <AuthStack.Navigator screenOptions={{headerShown:false}}>
       <AuthStack.Screen name={LOGIN} component={Login}/>
       <AuthStack.Screen name={REGISTER} component={Register}/>             
      </AuthStack.Navigator>
    
  );
};

export default AuthNavigator;
