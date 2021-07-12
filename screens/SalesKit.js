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
    Stack,
    Text,
    VStack
} from "native-base";
import React, { Component } from 'react'

export class SalesKit extends Component {
    render() {
        return (
            <NativeBaseProvider>
                <ScrollView mt={5}>
                    
                    <Center>
                    <Heading size="2xl" >
                        Sales Kit M3170
                    </Heading>
                    <Box shadow={2}
                         rounded="md" width="85%" my={4}>
                    <AspectRatio ratio={9/16} width="100%">
                        <Image
                            resizeMode="cover"
                            source={{
                            uri: "https://raw.githubusercontent.com/damme27/Testing_blogapp/master/assets/Slide1.JPG",
                            }}
                        />
                    </AspectRatio>
                    </Box>
                    <Heading size="2xl" >
                        Sales Kit L15150
                    </Heading>
                    <Box shadow={2}
                         rounded="md" width="85%" my={4}>
                    <AspectRatio ratio={9/16} width="100%">
                        <Image
                            resizeMode="cover"
                            source={{
                            uri: "https://raw.githubusercontent.com/damme27/Testing_blogapp/master/assets/Slide2.JPG",
                            }}
                        />
                    </AspectRatio>
                    </Box>
                    </Center>
                </ScrollView>
            </NativeBaseProvider>
        )
    }
}

export default SalesKit
