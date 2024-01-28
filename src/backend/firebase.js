// Firebase config

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLcWit1FpWQxBXix1V1dxkqzg__ThsZMQ",
  authDomain: "newme-e868a.firebaseapp.com",
  projectId: "newme-e868a",
  storageBucket: "newme-e868a.appspot.com",
  messagingSenderId: "436023755048",
  appId: "1:436023755048:web:7f1c819704880d1360101d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
