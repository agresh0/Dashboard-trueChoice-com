// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ReactObserver from 'react-event-observer';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1nO7jejAcsjLqNfuDLxh0750bzAgHKos",
  authDomain: "truechoice-dashboard.firebaseapp.com",
  projectId: "truechoice-dashboard",
  storageBucket: "truechoice-dashboard.appspot.com",
  messagingSenderId: "325151039281",
  appId: "1:325151039281:web:45750849466b0584ec9a10",
  measurementId: "G-RQY23DLC0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const firebaseObserver = ReactObserver();

auth.onAuthStateChanged(function(user) {
  firebaseObserver.publish("authStateChanged", loggedIn())
});

export function loggedIn() {
  return !!auth.currentUser;
}