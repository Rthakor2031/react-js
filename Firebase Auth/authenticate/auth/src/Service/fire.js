// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNqduFmt9uxK09qwBGtR7hQG_JLe1KyxY",
  authDomain: "authenticate-75fd7.firebaseapp.com",
  projectId: "authenticate-75fd7",
  storageBucket: "authenticate-75fd7.appspot.com",
  messagingSenderId: "950312361774",
  appId: "1:950312361774:web:bf330d6730fbf39296e4bf",
  measurementId: "G-7DBZSHRRWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);