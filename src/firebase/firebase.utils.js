import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDDE_no-rM6vncQQuUyngxu-P45xpgL2_I",
  authDomain: "clothing-db-6f15e.firebaseapp.com",
  databaseURL: "https://clothing-db-6f15e.firebaseio.com",
  projectId: "clothing-db-6f15e",
  storageBucket: "clothing-db-6f15e.appspot.com",
  messagingSenderId: "1098040910092",
  appId: "1:1098040910092:web:a5b048febdf8719d252929",
  measurementId: "G-KGYEXEMVVF"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;