import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAnzu2u799vPhWcXq1osMkemLz-fbCDRp8",
    authDomain: "ipobrerico.firebaseapp.com",
    projectId: "ipobrerico",
    storageBucket: "ipobrerico.appspot.com",
    messagingSenderId: "928870678707",
    appId: "1:928870678707:web:d9f19931251beedbdb70c6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;