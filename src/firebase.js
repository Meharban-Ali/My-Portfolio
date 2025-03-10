// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH8GVIBLSnQrzLvutpY-WeaqXCfoiAeNg",
  authDomain: "contactformapp-7a5ed.firebaseapp.com",
  databaseURL: "https://contactformapp-7a5ed-default-rtdb.firebaseio.com",
  projectId: "contactformapp-7a5ed",
  storageBucket: "contactformapp-7a5ed.firebasestorage.app",
  messagingSenderId: "910340225109",
  appId: "1:910340225109:web:8c57930ef92b2ea7d67cdc",
  databaseURL: "https://console.firebase.google.com/project/contactformapp-7a5ed/database/contactformapp-7a5ed-default-rtdb/data/~2F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db};
