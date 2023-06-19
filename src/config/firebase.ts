import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCD-VrSZ4z5HMcz34KN2tvg_DJm4Jhxvfs",
  authDomain: "react-4845c.firebaseapp.com",
  projectId: "react-4845c",
  storageBucket: "react-4845c.appspot.com",
  messagingSenderId: "249536359749",
  appId: "1:249536359749:web:e9c3c78afbae33192ba22c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);