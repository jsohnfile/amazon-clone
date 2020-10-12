import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCB_zOWjgdwsganWPbRncjWLQkvLJp7mVY",
    authDomain: "clone-89684.firebaseapp.com",
    databaseURL: "https://clone-89684.firebaseio.com",
    projectId: "clone-89684",
    storageBucket: "clone-89684.appspot.com",
    messagingSenderId: "947597701688",
    appId: "1:947597701688:web:a0523d5f48d5435c54eccd",
    measurementId: "G-83B0HGRXM8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
