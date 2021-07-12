import React, { Component } from 'react'
import { Text, View } from 'react-native'

import PhoneLogin from '../screens/PhoneLogin';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="screen"
    >
      <Stack.Screen name="Login" component={PhoneLogin}/>
    </Stack.Navigator>
  );
}

export { AuthStackNavigator };