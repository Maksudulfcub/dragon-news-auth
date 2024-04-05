// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG9hH0-4ff1rkkmK3dWNYd8UVfPn6gXQQ",
  authDomain: "dragon-news-auth-b3fb6.firebaseapp.com",
  projectId: "dragon-news-auth-b3fb6",
  storageBucket: "dragon-news-auth-b3fb6.appspot.com",
  messagingSenderId: "688748516227",
  appId: "1:688748516227:web:93e719a7c475e0ac2e9cb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;