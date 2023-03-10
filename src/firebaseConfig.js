// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl8jmE2wqseixree1uIME8muowW9SRaVA",
  authDomain: "bigbear-e-commerce.firebaseapp.com",
  projectId: "bigbear-e-commerce",
  storageBucket: "bigbear-e-commerce.appspot.com",
  messagingSenderId: "1058431012772",
  appId: "1:1058431012772:web:799af231a58ef26e337b31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);