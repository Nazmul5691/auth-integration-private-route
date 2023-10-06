// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeFAWFuIauf08NXsOuGkj9jZzPwlXMwk4",
  authDomain: "auth-integration-private-77a7a.firebaseapp.com",
  projectId: "auth-integration-private-77a7a",
  storageBucket: "auth-integration-private-77a7a.appspot.com",
  messagingSenderId: "1093450260226",
  appId: "1:1093450260226:web:4ea007ba7843b2719f2c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;