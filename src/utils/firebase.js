// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUFxE2bucrHRWQDwLpHPqlcoUpuph8IBw",
  authDomain: "netflix-413af.firebaseapp.com",
  projectId: "netflix-413af",
  storageBucket: "netflix-413af.appspot.com",
  messagingSenderId: "164549197595",
  appId: "1:164549197595:web:967fd59d890488a8f65dbe",
  measurementId: "G-4Z9L8JYF7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();