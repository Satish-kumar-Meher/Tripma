// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7hONBejFBSfa7ioAPVK6UHesAmeqbn0c",
  authDomain: "tripma-e80eb.firebaseapp.com",
  projectId: "tripma-e80eb",
  storageBucket: "tripma-e80eb.appspot.com", // ✅ correct

  messagingSenderId: "243447450306",
  appId: "1:243447450306:web:a4e8b16612db09dbcac95b",
  measurementId: "G-NE4D8KPZP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export {auth,fireDB}