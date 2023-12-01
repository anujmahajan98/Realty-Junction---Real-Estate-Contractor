// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realty-junction.firebaseapp.com",
  projectId: "realty-junction",
  storageBucket: "realty-junction.appspot.com",
  messagingSenderId: "416036177188",
  appId: "1:416036177188:web:0b974f2691a621e0c51fb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);