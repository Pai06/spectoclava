import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxMRzcinAPYseQOEJaFmkg9ODXcDrQowM",
    authDomain: "spectoclava.firebaseapp.com",
    projectId: "spectoclava",
    storageBucket: "spectoclava.appspot.com",
    messagingSenderId: "366759077079",
    appId: "1:366759077079:web:d93525605502d213e33c92",
    measurementId: "G-EHS0Y3PNJD"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const user = auth.currentUser;



export { app, auth, db};