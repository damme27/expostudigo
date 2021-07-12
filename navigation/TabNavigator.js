import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react'
import { Text, View } from 'react-native'

import About from '../screens/About';
import { MainStackNavigator } from './StackNavigator';
import colors from '../asset/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const RootTab = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
        <RootTab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'About') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 12,
                marginTop: -10,
                padding: 5,
              },
            style:{height:60}
          }}
          >
        <RootTab.Screen name="Home" component={MainStackNavigator}></RootTab.Screen>
        <RootTab.Screen name="About" component={About}></RootTab.Screen>
    </RootTab.Navigator>
    )
}

export default TabNavigator
