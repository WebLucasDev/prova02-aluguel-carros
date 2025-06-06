import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwnU6I0k0ncLOSJYeKVZTqz5eOrLo4Jus",
  authDomain: "prova02-aluguel-carros.firebaseapp.com",
  projectId: "prova02-aluguel-carros",
  storageBucket: "prova02-aluguel-carros.firebasestorage.app",
  messagingSenderId: "111137992722",
  appId: "1:111137992722:web:b5a226970f2f4cf9a928cb"
};

const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);

export default appFirebase;