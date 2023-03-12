import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjDCafDlz10-gyaJCtCrMbsy3tGTx1U88",
  authDomain: "react-mamha.firebaseapp.com",
  projectId: "react-mamha",
  storageBucket: "react-mamha.appspot.com",
  messagingSenderId: "922673212432",
  appId: "1:922673212432:web:5f9a91a8db80cbd053ae95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);