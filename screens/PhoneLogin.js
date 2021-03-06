import { Button, Center, HStack, Heading, Input, NativeBaseProvider, Stack, Text, TouchableOpacity, View } from "native-base"
import React, { useEffect, useRef, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from 'expo-constants';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from "react-native-phone-number-input";
import firebase from "../firebase";
import styles from "../lib/styles/style";

const PhoneLogin = ({ navigation }) =>{
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setusername] = useState('');
  const [formattedValue, setFormattedValue] = useState("");
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const phoneInput = useRef(null);
  const [loading, setLoading] = useState(false);
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(formattedValue, recaptchaVerifier.current)
      .then(setVerificationId);
  };

  const checkNumber = () => {
    const db = firebase.firestore().collection("phonenumber").where("number","==",formattedValue);
    
    setLoading(true);
    db.onSnapshot((querySnapshot) => {
      if (querySnapshot.exists) {
        alert("User does not exist anymore.")
        return;
      }

      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log('User data: ', doc.data());
      });
      setusername(items);
      
      setLoading(false);
    });
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        console.log(result);
      });
  };

  useEffect(() => {
    checkNumber();

  }, []);

  return (
    <NativeBaseProvider>
      <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />  
      <Center flex={1}>
      <Stack p={4} space={2} >
        <Stack space={2} alignItems="center">
          <Heading 
          size="md" 
          color= "blue.600"
          ml={-1}
          // _light={{
          //   color: "blue.700",
          // }}
          // _dark={{
          //   color: "blue.700",
          // }}
          >
            Verify Your Number {username.username}
          </Heading>
          <Heading
            size="xs"
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            Please enter your Country & your phone number
          </Heading>
        </Stack>
      </Stack>

      <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="ID"
            layout="first"
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
          />
        
        <Button 
        width="80%"
        my="12"
        bg="blue.600"
        onPress={checkNumber}>Send</Button>

      <Stack p={4} space={2}>
        <Stack space={2} alignItems="center">
          <Heading 
          size="md" 
          color= "blue.600"
          ml={-1}
          textAlign="left"
          // _light={{
          //   color: "blue.700",
          // }}
          // _dark={{
          //   color: "blue.700",
          // }}
          >
            Verify Your Code
          </Heading>
          <Heading
            size="xs"
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            Please enter your Code from your number
          </Heading>
        </Stack>
      </Stack>

      <Input
        placeholder="Confirmation Code"
        onChangeText={setCode}
        keyboardType="number-pad"
        width="80%"
      />
      
      <Button 
        width="80%"
        my="12"
        bg="blue.600"
        onPress={checkNumber}>Confirm</Button>

      </Center>
    </NativeBaseProvider>
  );
};

export default PhoneLogin
