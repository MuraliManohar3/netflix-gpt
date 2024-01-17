// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFtXgBssAkAQbix-6s2zoDlZNzbKsv6BU",
  authDomain: "netflixgpt-58111.firebaseapp.com",
  projectId: "netflixgpt-58111",
  storageBucket: "netflixgpt-58111.appspot.com",
  messagingSenderId: "583839402080",
  appId: "1:583839402080:web:7448ac60616185276f9b05",
  measurementId: "G-T50PXLF1YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();
