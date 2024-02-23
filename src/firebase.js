// import firebase from "firebase"  XXX
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/database"

const firebaseApp = firebase.initializeApp(


  {
    apiKey: "AIzaSyDO_IOz8nO8K_gifJZT6yckrw5XVDPYgTk",
  authDomain: "gossip-60ccf.firebaseapp.com",
  databaseURL: "https://gossip-60ccf-default-rtdb.firebaseio.com",
  projectId: "gossip-60ccf",
  storageBucket: "gossip-60ccf.appspot.com",
  messagingSenderId: "198400366014",
  appId: "1:198400366014:web:6c35f068975b366f1a55ef",
  measurementId: "G-L06MKQ00BR"
  }

);

const db = firebaseApp.firestore();

export default db;