import React, { Component } from 'react'
import { Text, View } from 'react-native'

import About from '../screens/About';
import Category from '../screens/SubCategory';
import DetailSalesKit from '../screens/Scrap/DetailSalesKit';
import Glossary from '../screens/Glossary';
import Home from '../screens/Home';
import ListArticle from '../screens/ListArticle';
import ListProduct from '../screens/ListProduct';
import ListVideo from '../screens/ListVideo';
import PhoneLogin from '../screens/PhoneLogin';
import ProductDetail from '../screens/Detail';
import SalesKit from '../screens/SalesKit';
import VideoPlayer from '../screens/Video';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      // headerMode="none"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SalesKit" component={SalesKit} />
      <Stack.Screen name="Glossary" component={Glossary} />
      <Stack.Screen name="ListProduct" component={ListProduct} />
      <Stack.Screen name="ListArticle" component={ListArticle}/>
      <Stack.Screen name="ListVideo" component={ListVideo} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="DetailSalesKit" component={DetailSalesKit}/>
      <Stack.Screen name="Category" component={Category} options={{ title: 'List Category' }}/>
    </Stack.Navigator>
  );
}
<Stack.Screen name="Login" component={PhoneLogin} options={{ headerShown: false }}/>
export { MainStackNavigator };