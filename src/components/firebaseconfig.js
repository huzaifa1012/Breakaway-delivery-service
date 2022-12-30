// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDkMU51DNoeTdP8v5beVP4lw6_iPzqLgQ",
  authDomain: "trial-89653.firebaseapp.com",
  projectId: "trial-89653",
  storageBucket: "trial-89653.appspot.com",
  messagingSenderId: "690940944774",
  appId: "1:690940944774:web:99f8ae4ed538c6cc7b4c07",
  measurementId: "G-PZMPZTL8P7",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
