import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getStorage, } from "firebase/storage";

//  web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDSDmckLI1Rrce4QGzMRZeD00WXObiEql0",
  authDomain: "next-s3.firebaseapp.com",
  projectId: "next-s3",
  storageBucket: "next-s3.appspot.com",
  messagingSenderId: "989682029110",
  appId: "1:989682029110:web:a018b0212fbfb2929c3e97"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
  