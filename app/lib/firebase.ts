import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCfu5ifpKf5lRT8TplppqL0Tp0dYR3c62w",
  authDomain: "e-commercewebsite-16001.firebaseapp.com",
  projectId: "e-commercewebsite-16001",
  storageBucket: "e-commercewebsite-16001.appspot.com",
  messagingSenderId: "810847648103",
  appId: "1:810847648103:web:fd89c54e0631c3acd297c2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();