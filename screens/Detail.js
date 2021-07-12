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
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

const ProductDetail = () => {
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
          <Image
            roundedTop="lg"
            source={{
              uri: "https://mediaserver.goepson.com/ImConvServlet/imconv/b7dd6793096d523ef0aef34c797ab09bf65ddeb2/300Wx300H?use=productpictures&assetDescr=19Cah_FJL_Black_31-1",
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
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
          INK
        </Center>
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
          27 MAY
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            Klasifikasi Kode Tinta Epson
          </Heading>
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
            Epson Ecotank Ink
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
        Seperti yang sahabat Epson ketahui, ada berbagai macam tipe tinta yang beredar saat ini dan untuk produk Epson sendiri terdapat beberapa jenis tinta yang digunakan dengan kategori kode tinta yang berbeda untuk tipe printernya. Namun, masih banyak juga yang tidak mengetahui perbedaan dari masing-masing jenis tinta tersebut dan kode berapa yang harus digunakan untuk printer yang user miliki.        </Text>
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
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });
  
  export default ProductDetail;
