import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_hxnoYWE4Lmk5iPhrVZseRo39TSfwlAI",
  authDomain: "medination-aac1e.firebaseapp.com",
  projectId: "medination-aac1e",
  storageBucket: "medination-aac1e.appspot.com",
  messagingSenderId: "153755996484",
  appId: "1:153755996484:web:710a1f3d2894f393054711",
  measurementId: "G-2WCPF920TQ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
