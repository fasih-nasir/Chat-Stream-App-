import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection,getDoc, addDoc, query,onSnapshot,getDocs,deleteDoc , doc ,updateDoc,orderBy} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDLmsFsw9_zHCGkdszZbxfK_rhlz6_V49k",
    authDomain: "fnecom.firebaseapp.com",
    projectId: "fnecom",
    storageBucket: "fnecom.appspot.com",
    messagingSenderId: "705874256206",
    appId: "1:705874256206:web:e242b58c4b8aaaaa857e1f",
    measurementId: "G-FJC73TFV5E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

auth.languageCode = 'eng';

export { db, orderBy,query,auth, getAuth,app, provider, collection, onSnapshot,deleteDoc ,addDoc, getDoc,getDocs, doc, updateDoc,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut };
