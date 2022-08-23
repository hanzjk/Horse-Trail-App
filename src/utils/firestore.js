// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApdomZD6PKMGYwoKUMYisyJTPFl_3NOh8",
  authDomain: "horsetrail-d62ed.firebaseapp.com",
  projectId: "horsetrail-d62ed",
  storageBucket: "horsetrail-d62ed.appspot.com",
  messagingSenderId: "164520129521",
  appId: "1:164520129521:web:243646092037cf46ce4a50",
  measurementId: "G-X6ZVF72JRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
