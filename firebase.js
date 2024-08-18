// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQUbDZfCWchCStzqvm5Oi7xt_lKM3LW8",
  authDomain: "flashcard-saas-b210f.firebaseapp.com",
  projectId: "flashcard-saas-b210f",
  storageBucket: "flashcard-saas-b210f.appspot.com",
  messagingSenderId: "648097887968",
  appId: "1:648097887968:web:6b223356c6358306158285",
  measurementId: "G-52PKTNNQ6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
