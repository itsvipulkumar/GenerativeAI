// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore, collection} from "firebase/firestore"

import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBevkcFBJf-HygnkvVDMV6YpMq7zPL0ryU",
    authDomain: "generative-aiv.firebaseapp.com",
    projectId: "generative-aiv",
    storageBucket: "generative-aiv.appspot.com",
    messagingSenderId: "793229838118",
    appId: "1:793229838118:web:c9065dfc8b860fb02423e7",
    measurementId: "G-P7QT0NX49M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Auth=getAuth(app)
const Provider= new GoogleAuthProvider()
const db= getFirestore(app)
const storage= getStorage(app)
const firestoreCollection = collection;


export { Auth, db, Provider,firestoreCollection,storage };