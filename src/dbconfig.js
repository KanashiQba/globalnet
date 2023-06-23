// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSO6bRVvBno33Xmc-i2qG_EHNWTl9iXag",
  authDomain: "globalnet-8386f.firebaseapp.com",
  projectId: "globalnet-8386f",
  storageBucket: "globalnet-8386f.appspot.com",
  messagingSenderId: "926314328592",
  appId: "1:926314328592:web:28f67b1d5df5b38bfb5095",
  measurementId: "G-MKFB509T84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
//const collectionRef = db.collection('users');
//export const auth = firebaseConfig.auth();
