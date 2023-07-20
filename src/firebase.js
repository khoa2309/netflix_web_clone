// import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4YIxVKyhIUFneyL-nk1w7XpW4jQ1e9Go",
  authDomain: "netflix-cua-khoa.firebaseapp.com",
  projectId: "netflix-cua-khoa",
  storageBucket: "netflix-cua-khoa.appspot.com",
  messagingSenderId: "626924345002",
  appId: "1:626924345002:web:4bd5de8b602d46160b62d3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
