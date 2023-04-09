import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKtLPZlsr9t1Fjsr3tQ58E9HQldbZzSJs",
  authDomain: "dabravesce.firebaseapp.com",
  projectId: "dabravesce",
  storageBucket: "dabravesce.appspot.com",
  messagingSenderId: "22693121889",
  appId: "1:22693121889:web:4306466770bcb11325bf20"
  // measurementId: "G-T851N26FZS",
  // databaseURL: 'https://project-id.firebaseio.com',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
