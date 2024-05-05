// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3JTKvQLBxSR6ZP48wc5IVnHmaz6LLEqk",
  authDomain: "astro-82a60.firebaseapp.com",
  projectId: "astro-82a60",
  storageBucket: "astro-82a60.appspot.com",
  messagingSenderId: "59251772379",
  appId: "1:59251772379:web:308c1664c7ee8551b535fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;