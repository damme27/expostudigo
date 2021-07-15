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
import React, { Component, useEffect, useState } from 'react'

import firebase from "../../firebase";

const DetailSalesKit = ({route}) =>{
    const {MediaID} = route.params;

    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection("media").where("mediaid", "==", MediaID);
  
  //REALTIME GET FUNCTION
  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDatas(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);


    return(
        <NativeBaseProvider>
        <ScrollView mt={5}>
            
            <Center>
            {MediaID}

            {datas.map((data) => (

            <Box shadow={2}
                 rounded="md" width="85%" my={4}>
            <AspectRatio ratio={9/16} width="100%">
                <Image
                    resizeMode="cover"
                    source={{
                    uri: data.url,
                    }}
                />
            </AspectRatio>
            </Box>
              ))}     
            </Center>

                 
            
        </ScrollView>
    </NativeBaseProvider>
    );
}

export default DetailSalesKit
