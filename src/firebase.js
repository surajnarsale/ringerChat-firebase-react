import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBo_-qrqPlVwrYLhj0i0HOdofAF_x8CGOI',
	authDomain: 'ringer-chat-app-1275f.firebaseapp.com',
	projectId: 'ringer-chat-app-1275f',
	storageBucket: 'ringer-chat-app-1275f.appspot.com',
	messagingSenderId: '413193713160',
	appId: '1:413193713160:web:2b05ca29a95313bf66c3bd',
	measurementId: 'G-ENVFG5RLRX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
