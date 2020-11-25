import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBN8Zf75GX7c9yFP6zVzBOikKc0Kh7VXEU",
    authDomain: "interbank-project.firebaseapp.com",
    databaseURL: "https://interbank-project.firebaseio.com",
    projectId: "interbank-project",
    storageBucket: "interbank-project.appspot.com",
    messagingSenderId: "834607468586",
    appId: "1:834607468586:web:5efe190aadfae832083353"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
//export const storage = firebase.storage();

export default firebase;