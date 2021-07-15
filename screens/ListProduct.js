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
import React, { useEffect, useState } from "react";

import { TouchableOpacity } from "react-native";
import firebase from "../firebase";

const ListProduct = ({ navigation, route }) => {

  const {params_ct} = route.params;
  const var_filter = JSON.stringify(params_ct)
  
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("saleskit").where("filter", "==",params_ct);
  
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

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          {params_ct}
          <SimpleGrid columns={2} spacingX={0} mt={5} width="80%">
             {/* L15150 */}
            {datas.map((data) => (
           
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DetailSalesKit", { MediaID: data.mediaid });
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
                    uri: data.url,
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
                    {data.title}
                  </Heading>
                </Stack>
              </Box>
             
            </TouchableOpacity>
            ))}
            
          </SimpleGrid>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ListProduct;
