import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyBYeLxOXcAgL47wlWRIpg6G_MG4S1NOEnc',
  authDomain: 'nub-ecse-base-20a58.firebaseapp.com',
  projectId: 'nub-ecse-base-20a58',
  storageBucket: 'nub-ecse-base-20a58.firebasestorage.app',
  messagingSenderId: '1016242067371',
  appId: '1:1016242067371:web:0773d7d8570caa83f624ee',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getDatabase(app);
