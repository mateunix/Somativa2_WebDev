import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDTNwGu2VoEKVb1jS9zW1F4C3Dzlp_BN4E",
  authDomain: "somativa2devweb.firebaseapp.com",
  projectId: "somativa2devweb",
  storageBucket: "somativa2devweb.appspot.com",
  messagingSenderId: "568077317753",
  appId: "1:568077317753:web:323ba88ec41ff0a22b46a8",
  measurementId: "G-FDR00ZCQES"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;