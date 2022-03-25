// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNqn4ypXSMOH0n3ZSH35uGwFKlSAJC-zQ",
  authDomain: "assgn-8550c.firebaseapp.com",
  projectId: "assgn-8550c",
  storageBucket: "assgn-8550c.appspot.com",
  messagingSenderId: "1072653110062",
  appId: "1:1072653110062:web:a388e20f1cdf8105de08bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) ;