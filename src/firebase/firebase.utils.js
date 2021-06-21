import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var config = {
    apiKey: "AIzaSyAaniuQaObUoQtsk-1Y0D9ZtzpUzjVbPOc",
    authDomain: "db-e-commerce-3b0c8.firebaseapp.com",
    projectId: "db-e-commerce-3b0c8",
    storageBucket: "db-e-commerce-3b0c8.appspot.com",
    messagingSenderId: "178353045399",
    appId: "1:178353045399:web:e46acfa369884be2b94ed2",
    measurementId: "G-CCD66CFM1S",
  }; 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;