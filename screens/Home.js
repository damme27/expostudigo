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
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "native-base";
import {
  Card,
  CardAction,
  CardButton,
  CardContent,
  CardImage,
  CardTitle,
} from "react-native-material-cards";
import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const items = 12;
  const data = Array(items).fill(0);
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <SimpleGrid columns={2} spacingX={0} mt={5} width="80%">
            {/* Printer */}
            <TouchableOpacity
              onPress={() => {navigation.navigate('Category', {CT: 'cissprinter'})}}
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
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/4ea49e6dd23310d939582e94b75bd239f3311978/1200Wx1200H?use=banner&assetDescr=19Cah_FDL_Black_01_2",
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
                    CISS PRINTER
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* Scanner */}

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Category", { CT: "scanner" });
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
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/c081a3bb950f2cf9894a81f572cbd9edf6a44325/515Wx515H?use=productpictures&assetDescr=DS30000_02_front_open-1",
                  }}
                  alt="image base"
                  resizeMode="cover"
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
                    Scanner
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>
            {/* Projector */}

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Category", { CT: "Projector" });
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
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/df3a304a00342d84b87b434014b7b226a4bcb49d/300Wx300H?use=banner&assetDescr=work-projector-hub",
                  }}
                  alt="image base"
                  resizeMode="cover"
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
                    Projector
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* SIDM */}

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Category", { CT: "tmsidm" });
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
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/08fdcae58ca810dce94b4f968084c4bba2f404cd/1200Wx1200H?use=banner&assetDescr=FY18_SIL_Left_EBCK",
                  }}
                  alt="image base"
                  resizeMode="cover"
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
                  <Heading textAlign={["center"]} size={["md"]} noOfLines={2}>
                    SIDM & TM
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>
            {/* LabelCWlw */}

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Category", { CT: "labelprinter" });
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
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/f0abfb5810dbc800b0f4b534f916fe31f362198a/1200Wx1200H?use=banner&assetDescr=8_ac_3",
                  }}
                  alt="image base"
                  resizeMode="cover"
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
                    Label PRINTER
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* industrialprinter */}

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Category",
                { CT: "industrialprinter" })
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
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/3d1b8586570c9a2835f4aa26331a27bbb2697fdb/1200Wx1200H?use=banner&assetDescr=L-4533A_L-4533AW",
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
                    Industrial Printer
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>

            {/* bijpribnter */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Category", { CT: "bijprinter" });
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
                    uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/4bfd14bf0ccc2f6644cf16a8f4b0c1caa3f66f86/515Wx515H?use=productpictures&assetDescr=WF-C20590_01_2-1",
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
                    BIJ Printer
                  </Heading>
                </Stack>
              </Box>
            </TouchableOpacity>
          </SimpleGrid>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  child: {
    width: 300,
  },
  titleView: {
    padding: 10,
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    color: "black",
  },
  sliderStyle: {
    width: 300,
    marginTop: 40,
  },
});

export default Home;
