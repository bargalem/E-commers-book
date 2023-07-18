// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8sV9CcyiquVzCupeyyvkpv0n2UScAqSc",
  authDomain: "bookwarm-253e0.firebaseapp.com",
  projectId: "bookwarm-253e0",
  storageBucket: "bookwarm-253e0.appspot.com",
  messagingSenderId: "1042917073184",
  appId: "1:1042917073184:web:cb8cfe31cc034804b13745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;