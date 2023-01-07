
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOlBcYwF_lHPJ-VmeKGIM3y_bPo0T4CFc",
  authDomain: "educational-courses-b1a69.firebaseapp.com",
  projectId: "educational-courses-b1a69",
  storageBucket: "educational-courses-b1a69.appspot.com",
  messagingSenderId: "1072839883881",
  appId: "1:1072839883881:web:5a7585a2a750292403f6f8"
};

// gatherign an instance of firebase cloudstore and auth.
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };