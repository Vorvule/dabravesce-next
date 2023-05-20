import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_DABRAVESCE_FIREBASE_API_KEY,
  authDomain: "dabravesce.firebaseapp.com",
  projectId: "dabravesce",
  storageBucket: "dabravesce.appspot.com",
  messagingSenderId: "22693121889",
  appId: "1:22693121889:web:4306466770bcb11325bf20"
  // measurementId: "G-T851N26FZS", // optional for Firebase JS SDK v7.20.0 and later
  // databaseURL: 'https://project-id.firebaseio.com',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
