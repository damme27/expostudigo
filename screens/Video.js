import { AVPlaybackStatus, Video } from "expo-av";
import {
    AspectRatio,
    Box,
    Center,
    HStack,
    Heading,
    Icon,
    Image,
    NativeBaseProvider,
    Stack,
    Text,
    useColorModeValue,
} from "native-base";
import { Button, StyleSheet, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import React, { Component } from "react";

const VideoPlayerView = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
      <NativeBaseProvider>
        <Center>
        <Box
      width="100%"
      shadow={1}
      _light={{
        backgroundColor: "gray.50",
      }}
      _dark={{
        backgroundColor: "gray.700",
      }}
    >
      <Box>
        <AspectRatio ratio={16 / 9}>
            <Video
            ref={video}
            style={styles.video}
            source={{
            uri: 'https://raw.githubusercontent.com/damme27/Testing_blogapp/master/assets/L5190%20-%20How%20To%20Install%20Epson%20Connect%2C%20Register%20Your%20Printer%20And%20Send%20Email%20To%20Your%20Printer%20Email-1.m4v',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        </AspectRatio>
        
        <Center
          p={1}
          rounded="full"
          bg="red.500"
          boxSize={10}
          position="absolute"
          right={0}
          m={2}
          _text={{
            color: "white",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "xs",
          }}
        >
          27 JUN
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            L5190 - How to Install Epson Connect, Register your printer and send email to your Printer Email.
          </Heading>
          {/* <Center
          bg="red.500"
          _text={{
            color: "white",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom={0}
          px={2}
          py={1}
        >
          Video Tutorial
        </Center> */}
          <Heading
            size="xs"
            _light={{
              color: "red.500",
            }}
            _dark={{
              color: "red.300",
            }}
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            Video Tutorial CISS
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
            Berikut adalah tutorial bagaimana cara menggunakan Epson Connect mulai dari instalasi software, registrasi printer hingga demo mengirimkan email. Dengan Epson connect user dapat mencetak dan scan dokumen secara mobile dari jarak jauh.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Icon
              as={<Ionicons name="heart-circle" />}
              color="gray.500"
              size="sm"
            />
            <Text ml={1} color="gray.500" fontWeight="500">
              3 Like
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icon
              as={<Ionicons name="ios-chatbubbles" />}
              color="gray.500"
              size="sm"
            />

            <Text ml={1} color="gray.500" fontWeight="500">
              39 comments
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
        </Center>  
      </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VideoPlayerView;
