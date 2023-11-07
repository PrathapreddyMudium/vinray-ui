// Import the functions you need from the SDKs you need
import Firebase from 'firebase/compat/app';
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuVZrbUI5oRRsJfpAvntZTFSGrM-T-MGM",
    authDomain: "react-authentication-7b095.firebaseapp.com",
    projectId: "react-authentication-7b095",
    storageBucket: "react-authentication-7b095.appspot.com",
    messagingSenderId: "128449974204",
    appId: "1:128449974204:web:676c5429cfc6a25845a5b9"
  };

  Firebase.initializeApp(firebaseConfig);
  const projectAuth = Firebase.auth();

  export { projectAuth };
  