import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAywqdft2-43Sr7-tBBr1708JI6O5rpG5Q",
  authDomain: "dextereous-learning.firebaseapp.com",
  projectId: "dextereous-learning",
  storageBucket: "dextereous-learning.appspot.com",
  messagingSenderId: "60513484749",
  appId: "1:60513484749:web:93fd61592d69fa8e118e84"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
