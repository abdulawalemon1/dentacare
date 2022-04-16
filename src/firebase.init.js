// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1pnR4Gk_HGI0ckWerPlvCmr-aHJ5dSWQ",
    authDomain: "dentacare-f083f.firebaseapp.com",
    projectId: "dentacare-f083f",
    storageBucket: "dentacare-f083f.appspot.com",
    messagingSenderId: "390397618783",
    appId: "1:390397618783:web:8b455bdde332ed73fa09ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;