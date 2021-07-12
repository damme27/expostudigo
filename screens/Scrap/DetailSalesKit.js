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
import React, { Component, useState } from 'react'

import ImageView from "react-native-image-viewing";
import { TouchableOpacity } from "react-native";
import { View } from "native-base";

const DetailSalesKit = ({route}) =>{
    const {Product} = route.params;
   
    return(
        <NativeBaseProvider>
        <ScrollView mt={5}>
            
            <Center>
           
            <Box shadow={2}
                 rounded="md" width="85%" my={4}>
            <AspectRatio ratio={9/16} width="100%">
                <Image
                    resizeMode="cover"
                    source={{
                    uri: JSON.stringify(Product) == '"M3170"' ? 'https://raw.githubusercontent.com/damme27/Testing_blogapp/master/assets/Slide1.JPG':'https://raw.githubusercontent.com/damme27/Testing_blogapp/master/assets/Slide2.JPG',
                    }}
                />
            </AspectRatio>
            </Box>
            </Center>
        </ScrollView>
    </NativeBaseProvider>
    );
}

export default DetailSalesKit
