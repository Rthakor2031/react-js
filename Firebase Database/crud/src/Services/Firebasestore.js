// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFX5-ajZ2LZiAxKgKdfXCQNI7qzoAUJ8c",
  authDomain: "fir-store-db4d1.firebaseapp.com",
  projectId: "fir-store-db4d1",
  storageBucket: "fir-store-db4d1.appspot.com",
  messagingSenderId: "891234055863",
  appId: "1:891234055863:web:ed848f4126e00585f53f32",
  measurementId: "G-LG5XHRXBWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);