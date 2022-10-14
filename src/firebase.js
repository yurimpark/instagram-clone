import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpiQ3Sk8-x87QKVPpqPNzEcEcfCN6NJgE",
  authDomain: "instagram-clone-b3661.firebaseapp.com",
  projectId: "instagram-clone-b3661",
  storageBucket: "instagram-clone-b3661.appspot.com",
  messagingSenderId: "108098563216",
  appId: "1:108098563216:web:c2bc5442372d727838fc15",
  measurementId: "G-2VS20GXQYF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
