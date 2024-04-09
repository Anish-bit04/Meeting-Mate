// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "schedular-9223b.firebaseapp.com",
  projectId: "schedular-9223b",
  storageBucket: "schedular-9223b.appspot.com",
  messagingSenderId: "703898629414",
  appId: "1:703898629414:web:6aa50c4392353358ea3de7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);