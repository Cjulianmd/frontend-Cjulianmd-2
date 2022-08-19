// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC22pIKmK1laf0dew21wMD4rdFoJvqIJV4",
  authDomain: "academia-geek-8a4f7.firebaseapp.com",
  projectId: "academia-geek-8a4f7",
  storageBucket: "academia-geek-8a4f7.appspot.com",
  messagingSenderId: "207599609148",
  appId: "1:207599609148:web:af27c2cc11cef24bd0ea39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const db = getFirestore(app);
export{ 
    app,
    google,
    db

}