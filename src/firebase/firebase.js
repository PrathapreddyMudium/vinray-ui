import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
/*const firebaseConfig = {
    apiKey: "AIzaSyCuVZrbUI5oRRsJfpAvntZTFSGrM-T-MGM",
    authDomain: "react-authentication-7b095.firebaseapp.com",
    projectId: "react-authentication-7b095",
    storageBucket: "react-authentication-7b095.appspot.com",
    messagingSenderId: "128449974204",
    appId: "1:128449974204:web:676c5429cfc6a25845a5b9"
  };*/

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig.apiKey);
export const auth = getAuth(app);
export default app;