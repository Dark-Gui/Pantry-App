// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirebase, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYJd6vR0jqzvwyt-u9z1CLVjyyMa9QVN0",
  authDomain: "inventory-5c12f.firebaseapp.com",
  projectId: "inventory-5c12f",
  storageBucket: "inventory-5c12f.appspot.com",
  messagingSenderId: "811525878650",
  appId: "1:811525878650:web:92372a9638525768c75cc3",
  measurementId: "G-9P5G2TZ04C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore =getFirestore(app);

export { firestore };