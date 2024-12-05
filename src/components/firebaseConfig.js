import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyxAHdLUgrdUgrONQ4hGJtfoMsk90odVQ",
  authDomain: "learning-path-bb68f.firebaseapp.com",
  projectId: "learning-path-bb68f",
  storageBucket: "learning-path-bb68f.firebasestorage.app",
  messagingSenderId: "580672532784",
  appId: "1:580672532784:web:49f3d5a9bedc2d7c0958f5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, signInWithPopup, signOut };
