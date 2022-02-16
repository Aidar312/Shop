import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_QMU8FNSN8OnipDOoZPJ1qI4EReGFiKI",
  authDomain: "snakers-f98c1.firebaseapp.com",
  projectId: "snakers-f98c1",
  storageBucket: "snakers-f98c1.appspot.com",
  messagingSenderId: "408135396012",
  appId: "1:408135396012:web:b5003671efe7c9dfb34d09",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = firebase.firestore();
