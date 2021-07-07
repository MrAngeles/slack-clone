import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPsy0hfI-R3UzwZ4r17lANi4o-TuZ7NgA",
  authDomain: "slack-clone-43e15.firebaseapp.com",
  projectId: "slack-clone-43e15",
  storageBucket: "slack-clone-43e15.appspot.com",
  messagingSenderId: "1056170590794",
  appId: "1:1056170590794:web:85fe39dad446b9e4249cb3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
