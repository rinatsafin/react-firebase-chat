// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const GOOGLE_AUTH_PROJECT_PUBLIC_ID = process.env.REACT_APP_GOOGLE_AUTH_PROJECT_PUBLIC_ID;
export const FIREBASE_DOCUMENT_PARENT_PATH = process.env.REACT_APP_FIREBASE_DOCUMENT_PARENT_PATH;
export const FIREBASE_DOCUMENT_ID = process.env.REACT_APP_FIREBASE_DOCUMENT_ID;

export const FIREBASE_ORDER_BY = {
  asc: 'asc',
  desc: 'desc',
  createdAt: 'createdAt',
}
export const LIMITH_MESSAGES = 50;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);