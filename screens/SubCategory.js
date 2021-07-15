import {  } from 'react-native';

import {
    AspectRatio,
    Avatar,
    Box,
    Button,
    Center,
    HStack,
    Heading,
    Image,
    NativeBaseProvider,
    ScrollView,
    SimpleGrid,
    Stack,
    Text,
    VStack
} from "native-base";
import React, { Component } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native";

const Category = ({navigation, route}) =>{
    const {CT} = route.params;
 
    return(
        <NativeBaseProvider>
            <ScrollView>
                    <VStack space={4} w="100%" my={6} alignItems="center">
                        <Text>{CT}</Text>
                        <Button onPress={() => {navigation.navigate('ListProduct', {params_ct: CT})}} bg="blue.500" borderColor='#ededed' w="80%" my={2} py={4} rounded="lg">Sales Kit</Button>
                        <Button onPress={() => {navigation.navigate('ListVideo'), {params_ct: CT}}} bg="blue.500" borderColor='#ededed' w="80%" my={2} py={4} rounded="lg">Video Tutorial</Button>
                        <Button onPress={() => {navigation.navigate('ListArticle'), {params_ct: CT}}} bg="blue.500" borderColor='#ededed' w="80%" my={2} py={4} rounded="lg">Article</Button>
                        <Button onPress={() => {navigation.navigate('FAQ'), {params_ct: CT}}} bg="blue.500" borderColor='#ededed' w="80%" my={2} py={4} rounded="lg">FAQ</Button>
                        <Button onPress={() => {navigation.navigate('Glossary'), {params_ct: CT}}} bg="blue.500" borderColor='#ededed' w="80%" my={2} py={4} rounded="lg">Glossarium</Button>
                        <Button onPress={() => {navigation.navigate('Chat'), {params_ct: CT}}} bg="blue.500" borderColor='#ededed' w="80%" my={2} py={4} rounded="lg">Chat</Button>
                    </VStack>
            </ScrollView>
        </NativeBaseProvider>
    );
};

export default Category
