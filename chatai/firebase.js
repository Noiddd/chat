import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD868yBD9AC1Ret0Fzq51F-4PR2P7KMGJA",
  authDomain: "messenger-5ffd1.firebaseapp.com",
  databaseURL: "https://messenger-5ffd1-default-rtdb.firebaseio.com",
  projectId: "messenger-5ffd1",
  storageBucket: "messenger-5ffd1.appspot.com",
  messagingSenderId: "360913195615",
  appId: "1:360913195615:web:798120574a3aeb924a01ea",
  measurementId: "G-3PZ99JSJCM",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
