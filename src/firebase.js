import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB78iUNW-TW8Dc_k96SsFDMDx0LIDsi02s",
  authDomain: "gym-programs.firebaseapp.com",
  projectId: "gym-programs",
  storageBucket: "gym-programs.appspot.com",
  messagingSenderId: "926513275389",
  appId: "1:926513275389:web:4f5cafab978dfcc6967994",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
