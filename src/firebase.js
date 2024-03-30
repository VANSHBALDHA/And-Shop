import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmQOTn3rR9GiKOkDvMAYg17Zc8M9S473s",
  authDomain: "react-context-a450b.firebaseapp.com",
  projectId: "react-context-a450b",
  storageBucket: "react-context-a450b.appspot.com",
  messagingSenderId: "856021070740",
  appId: "1:856021070740:web:2a80ddbb4c2fc0f1ae9581",
  measurementId: "G-NSNHLF4Q94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
  
export default app;

