import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBubd9JwBE8aNODiADyKOi-DihBJ0nuLoE",
  authDomain: "storage-4cb3a.firebaseapp.com",
  databaseURL: "https://storage-4cb3a-default-rtdb.firebaseio.com",
  projectId: "storage-4cb3a",
  storageBucket: "storage-4cb3a.firebasestorage.app",
  messagingSenderId: "344754710127",
  appId: "1:344754710127:web:9400e87595ba95085d8f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app) 