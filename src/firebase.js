import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCFh0ZkiAiuGALcXxVQeciikGq6AsucO7s",
    authDomain: "chat-x-a7956.firebaseapp.com",
    databaseURL: "https://chat-x-a7956-default-rtdb.firebaseio.com",
    projectId: "chat-x-a7956",
    storageBucket: "chat-x-a7956.appspot.com",
    messagingSenderId: "700627589975",
    appId: "1:700627589975:web:9916e18f97d7627a857c12"
  };
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  export const storage = getStorage();
  export const db = getFirestore(app);