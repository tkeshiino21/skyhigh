import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAjBjy6koYgxI55OlNXa-g_JomQIfuXmUQ",
    authDomain: "skyhigh-65e91.firebaseapp.com",
    databaseURL: "https://skyhigh-65e91.firebaseio.com",
    projectId: "skyhigh-65e91",
    storageBucket: "skyhigh-65e91.appspot.com",
    messagingSenderId: "834631729798",
    appId: "1:834631729798:web:174ec129294ebd8c7d8707",
    measurementId: "G-QBE2T6TWVC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().setting({ timestampsInSnapshots: true});

export default firebase;