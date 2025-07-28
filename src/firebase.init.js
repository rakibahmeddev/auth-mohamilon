// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2Yntppb-sEETBO_ctar4J8dXZOtCRl3I',
  authDomain: 'auth-mohamilon-110fd.firebaseapp.com',
  projectId: 'auth-mohamilon-110fd',
  storageBucket: 'auth-mohamilon-110fd.firebasestorage.app',
  messagingSenderId: '55396886355',
  appId: '1:55396886355:web:ced5e054c21d3538fc63a6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
