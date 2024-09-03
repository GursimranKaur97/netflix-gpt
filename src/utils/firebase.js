// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOJ00mBL2Qo1_VzP7mRAA-1diwZOXldAw",
  authDomain: "netflixgpt-d5867.firebaseapp.com",
  projectId: "netflixgpt-d5867",
  storageBucket: "netflixgpt-d5867.appspot.com",
  messagingSenderId: "585930437584",
  appId: "1:585930437584:web:b7816c33ea3a32422dbfd5",
  measurementId: "G-6CWGY74K2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();