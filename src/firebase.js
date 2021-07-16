import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5ems0wo_Sh63YSoaEre8yxLNcupk3b7c",
  authDomain: "slack-clone-f188c.firebaseapp.com",
  projectId: "slack-clone-f188c",
  storageBucket: "slack-clone-f188c.appspot.com",
  messagingSenderId: "344037142319",
  appId: "1:344037142319:web:55b6725f0e03f45505fbda"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
