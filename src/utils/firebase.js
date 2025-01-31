// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1PgL03JBh5zvlC8C0mp5J9l2YsVN6G7s",
  authDomain: "netflixgpt-aa0b9.firebaseapp.com",
  projectId: "netflixgpt-aa0b9",
  storageBucket: "netflixgpt-aa0b9.firebasestorage.app",
  messagingSenderId: "158549189440",
  appId: "1:158549189440:web:a6fdee561c8f0a4a5f50a5",
  measurementId: "G-8WLV6ZFEED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();