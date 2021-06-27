import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyDQ_5ubTthWfwUIRRj3t93WZVO6-HEnEpI",
  authDomain: "letmeask-febe7.firebaseapp.com",
  databaseURL: "https://letmeask-febe7-default-rtdb.firebaseio.com",
  projectId: "letmeask-febe7",
  storageBucket:"letmeask-febe7.appspot.com",
  messagingSenderId: "467846203086",
  appId: "1:467846203086:web:d19bd02466bdcda1e3f29f"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }