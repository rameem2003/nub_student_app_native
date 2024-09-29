// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6nMUF7wxnubd13bpodl4lro9n0hiRFQI',
  authDomain: 'nub-ecse-base.firebaseapp.com',
  projectId: 'nub-ecse-base',
  storageBucket: 'nub-ecse-base.appspot.com',
  messagingSenderId: '937368234249',
  appId: '1:937368234249:web:316617273e0f7797a88bd8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getDatabase(app);
