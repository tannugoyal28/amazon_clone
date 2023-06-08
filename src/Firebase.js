// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA41yBDAmWIWg79T7Bgc2huf-yl0awMiEM",
  authDomain: "challange-9ffca.firebaseapp.com",
  projectId: "challange-9ffca",
  storageBucket: "challange-9ffca.appspot.com",
  messagingSenderId: "758098772746",
  appId: "1:758098772746:web:ef3bc28dc442c94f94f0f3",
  measurementId: "G-11LLJ10LJZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};