import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoUmjuscDLssTqSw1zCPiYChh8xJsklsk",
    authDomain: "instagram-88bf7.firebaseapp.com",
    projectId: "instagram-88bf7",
    storageBucket: "instagram-88bf7.appspot.com",
    messagingSenderId: "266100576944",
    appId: "1:266100576944:web:2f4c62ff44d9b99f7fa175",
    measurementId: "G-VXSVRX5664"
  };

  export default firebase.initializeApp(firebaseConfig);