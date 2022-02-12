import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHLPPEfzDYOubbJyNzsqpqKr-nFLZKq28",
  authDomain: "re-commerce-6b7ba.firebaseapp.com",
  projectId: "re-commerce-6b7ba",
  storageBucket: "re-commerce-6b7ba.appspot.com",
  messagingSenderId: "943997361998",
  appId: "1:943997361998:web:6238640b78bb53e408081f",
  measurementId: "G-Z76MVZPX50"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;