import firebase from 'firebase/app';
import 'firebase/database';

// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAQrMZkRE2DsK2Fu5xr8aNJtiWRU84tLOU',
    authDomain: 'retrify-f23eb.firebaseapp.com',
    databaseURL: 'https://retrify-f23eb.firebaseio.com',
    projectId: 'retrify-f23eb',
    storageBucket: '',
    messagingSenderId: '543816546735',
    appId: '1:543816546735:web:a206de2ebd8b8195'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
