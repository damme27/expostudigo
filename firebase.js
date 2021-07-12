import "@firebase/auth";

import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVaGofjkyotU16zmc4nTY1TacONkGhkBE",
    authDomain: "studygo-7a2c8.firebaseapp.com",
    projectId: "studygo-7a2c8",
    storageBucket: "studygo-7a2c8.appspot.com",
    messagingSenderId: "929249034450",
    appId: "1:929249034450:web:ab93974c099a7286396d0b",
    measurementId: "G-N9W7ZTY325"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;  
