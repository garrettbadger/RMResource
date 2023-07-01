// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuYVEQNplE97lxpxi-BqpH0YK0eVmeYYg",
  authDomain: "rmresource-98c95.firebaseapp.com",
  projectId: "rmresource-98c95",
  storageBucket: "rmresource-98c95.appspot.com",
  messagingSenderId: "604540263700",
  appId: "1:604540263700:web:4262835627f032a58d3601",
  measurementId: "G-REM0C12KRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);