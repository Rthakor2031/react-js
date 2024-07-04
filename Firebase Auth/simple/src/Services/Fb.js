// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBLCEkAmqtvsWP1c63H4UwEzSU0_OHEUzw",
  authDomain: "auth-34a54.firebaseapp.com",
  projectId: "auth-34a54",
  storageBucket: "auth-34a54.appspot.com",
  messagingSenderId: "408202178638",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();