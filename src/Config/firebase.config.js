// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ5HC9JbuwRu_XV8c9g4sS7xg4iZP5YmE",
  authDomain: "prizo-7045e.firebaseapp.com",
  projectId: "prizo-7045e",
  storageBucket: "prizo-7045e.appspot.com",
  messagingSenderId: "1055117882569",
  appId: "1:1055117882569:web:bcb3f806460449f9d30918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);