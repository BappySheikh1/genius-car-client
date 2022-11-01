// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdWkhi0V4V1dVlH4fzQpPUIUSbSyD3vmk",
  authDomain: "genius-car-31ddf.firebaseapp.com",
  projectId: "genius-car-31ddf",
  storageBucket: "genius-car-31ddf.appspot.com",
  messagingSenderId: "726487970189",
  appId: "1:726487970189:web:5e39260af8a7c50aaf0dc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app