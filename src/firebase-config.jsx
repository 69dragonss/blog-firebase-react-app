// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEK9Udqn_hz7vgGaY_CCG0dyZnMN0_9Wo",
    authDomain: "react-firebase-app-ed5ec.firebaseapp.com",
    projectId: "react-firebase-app-ed5ec",
    storageBucket: "react-firebase-app-ed5ec.appspot.com",
    messagingSenderId: "702021689612",
    appId: "1:702021689612:web:54051cff9a75bca399e929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();