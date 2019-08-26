import firebase from 'firebase/app';
import 'firebase/database';

// Firebase configuration
const firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
