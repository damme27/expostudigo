import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import PhoneLogin from './screens/PhoneLogin';
import React from 'react';
import SplashScreen from './screens/SplashScreen';
import TabNavigator from './navigation/TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();


const App = () => {
  

  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal"  headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen}></RootStack.Screen>
        <RootStack.Screen
          name="Login"
          component={PhoneLogin}     
        />
        <RootStack.Screen name="MainStack" component={TabNavigator} />
      </RootStack.Navigator>
      
    </NavigationContainer>
  );
}
export default App
