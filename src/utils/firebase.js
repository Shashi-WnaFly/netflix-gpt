// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBboXubJKAnaw-sAyqniRaqp8wmTzwsEV4",
  authDomain: "netflixgpt-88996.firebaseapp.com",
  projectId: "netflixgpt-88996",
  storageBucket: "netflixgpt-88996.appspot.com",
  messagingSenderId: "171644936739",
  appId: "1:171644936739:web:54b7130d58dfb3ddcb0796",
  measurementId: "G-174WLGT1K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);