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

const ListArticle = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <SimpleGrid columns={2} spacingX={0} mt={5} width="80%">
            {/* L15150 */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductDetail");
              }}
            >
              <Box
                bg="white"
                ml={-3}
                mb={4}
                shadow={2}
                rounded="lg"
                minWidth="65%"
                maxWidth="80%"
              >
                <Image
                  source={{
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/b7dd6793096d523ef0aef34c797ab09bf65ddeb2/300Wx300H?use=productpictures&assetDescr=19Cah_FJL_Black_31-1",
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
                    size={["md", "lg", "md"]}
                    noOfLines={2}
                  >
                    Epson Ecotank Ink
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* M3170 */}
          
          </SimpleGrid>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ListArticle;
