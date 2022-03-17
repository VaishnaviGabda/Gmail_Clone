import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
 
  apiKey: "AIzaSyA_mCx0L1c7sXp5NSAct7eB1KN5sliJrv4",
  authDomain: "clone-55ea2.firebaseapp.com",
  projectId: "clone-55ea2",
  storageBucket: "clone-55ea2.appspot.com",
  messagingSenderId: "632715977109",
  appId: "1:632715977109:web:b926dd28590ff51cfd969c",
  measurementId: "G-3JG7FT3B4X"

};

//connect front end to backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
//in order to get our database from our code
const db = firebaseApp.firestore();
// getting authentication module
const auth = firebase.auth();
//allows us google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
