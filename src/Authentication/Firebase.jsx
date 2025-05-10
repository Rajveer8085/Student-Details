// Import the functions you need from the SDKs you nee
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD74RieR-XaCs0kvP1jhqvU7pMur-vsYBE",
  authDomain: "project1-6fccf.firebaseapp.com",
  projectId: "project1-6fccf",
  storageBucket: "project1-6fccf.firebasestorage.app",
  messagingSenderId: "319185240084",
  appId: "1:319185240084:web:9628a46a59f748960b2701",
  measurementId: "G-DHGTTLKHSD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider,app };
