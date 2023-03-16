import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDebPzRutuQgQDbfyPg14FdYmEqXSzH1Rs",
  authDomain: "urban-insight-data-platform.firebaseapp.com",
  projectId: "urban-insight-data-platform",
  storageBucket: "urban-insight-data-platform.appspot.com",
  messagingSenderId: "491695139833",
  appId: "1:491695139833:web:9c0d9d07173dfb470a2b28",
  measurementId: "G-TC3D4DFBS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)