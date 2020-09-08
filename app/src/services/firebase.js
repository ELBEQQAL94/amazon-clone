import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsSCXwPzDtH95KzvKTNo6qAzYDpyB9UvQ",
  authDomain: "clone-dc80c.firebaseapp.com",
  databaseURL: "https://clone-dc80c.firebaseio.com",
  projectId: "clone-dc80c",
  storageBucket: "clone-dc80c.appspot.com",
  messagingSenderId: "62033121587",
  appId: "1:62033121587:web:8b18d456f5c82df06a2e46"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
  auth,
};
