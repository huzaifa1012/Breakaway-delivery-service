// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD_mdTHH9GdbCVJdSTwgEaW9FpKOXNhcQ",
  authDomain: "deletemeinjan.firebaseapp.com",
  projectId: "deletemeinjan",
  storageBucket: "deletemeinjan.appspot.com",
  messagingSenderId: "389937253114",
  appId: "1:389937253114:web:8ae280603fd7b260525743"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);