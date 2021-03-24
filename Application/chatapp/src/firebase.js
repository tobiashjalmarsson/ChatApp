import firebase from 'firebase/app';
import 'firebase/auth';

// We use enviroment variables we can use development variables,
// when pushing to production we can just switch to the production
// variables without changing any code.
const firebaseConfig = {
    apiKey: "AIzaSyBu6pj7yf1kRy8Lmv-aGQVVtaCsVbcrB3A",
    authDomain: "chatapp-development-44df0.firebaseapp.com",
    projectId: "chatapp-development-44df0",
    storageBucket: "chatapp-development-44df0.appspot.com",
    messagingSenderId: "655682449819",
    appId: "1:655682449819:web:62bfca56aa0c0943a0b13e"
  };
// auth is used for the authentication
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

export default app;

