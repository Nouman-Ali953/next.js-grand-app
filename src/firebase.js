// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "auth-app-76baa.firebaseapp.com",
  projectId: process.env.NEXT_FIREBASE_PROJECT_ID,
  storageBucket: "auth-app-76baa.appspot.com",
  messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
  appId: "1:987958220921:web:ad4dacb7bdaccc3edadca8"
};

// Initialize Firebase ok
export const app = initializeApp(firebaseConfig);