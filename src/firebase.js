import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyB43mPaIRu8PAEpdOEi2LegMeMBv9pDeio',
    authDomain: 'instagram-clone-react-7da73.firebaseapp.com',
    projectId: 'instagram-clone-react-7da73',
    storageBucket: 'instagram-clone-react-7da73.appspot.com',
    messagingSenderId: '930936165811',
    appId: '1:930936165811:web:31220e27e3bd14f0d8e7c6',
    measurementId: 'G-E2180H6XFH',
};

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
