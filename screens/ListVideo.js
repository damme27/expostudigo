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
    VStack,
} from "native-base";
import React, { Component } from "react";

import { TouchableOpacity } from "react-native";

const ListVideo = ({navigation}) => {
    return(
        <NativeBaseProvider>
      <ScrollView>
        <Center>
          <SimpleGrid columns={2} spacingX={0} mt={5} width="80%">
            {/* Video Tutorial #1 */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("VideoPlayer");
              }}
            >
              <Box
                bg="white"
                ml={-3}
                mb={4}
                shadow={2}
                rounded="lg"
                minWidth="65%"
                maxWidth="70%"
              >
                <Image
                  source={{
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/09c1b1b6cc59586212aa8180d79f4869f95550c6/1200Wx1200H?use=banner&assetDescr=L5190_05_2-1",
                  }}
                  alt="image base"
                  resizeMode="contain"
                  height={150}
                  roundedTop="md"
                />
                <Text
                  bold
                  position="absolute"
                  color="white"
                  top={0}
                  m={[4, 4, 8]}
                ></Text>
                <Stack space={4} p={[4, 4, 8]}>
                  <Heading
                    textAlign={["center"]}
                    size={["sm", "md", "lg"]}
                    noOfLines={2}
                  >
                    L5190 - How to Install Epson Connect, Register your printer and send email to your Printer Email
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* Video Tutorial #2 */}
          
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductDetail");
              }}
            >
              <Box
                bg="white"
                ml={-5}
                mb={4}
                shadow={2}
                rounded="lg"
                minWidth="65%"
                maxWidth="70%"
              >
                <Image
                  source={{
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/4a47f771944311ca20676e65a4fcf3f3e9f459f8/1200Wx1200H?use=banner&assetDescr=17Lio_FAL_Black_03_2",
                  }}
                  alt="image base"
                  resizeMode="contain"
                  height={150}
                  roundedTop="md"
                />
                <Text
                  bold
                  position="absolute"
                  color="white"
                  top={0}
                  m={[4, 4, 8]}
                ></Text>
                <Stack space={4} p={[4, 4, 8]}>
                  <Heading
                    textAlign={["center"]}
                    size={["sm"]}
                    noOfLines={2}
                  >
                    L6190 - How to print using Airprint & iPrint
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>
          </SimpleGrid>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
    );
}

export default ListVideo
