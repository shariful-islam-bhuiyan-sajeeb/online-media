// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqQStwxv6B0qj0xQ-feKW0rABHCwlGXwA",
  authDomain: "online-media-23cc6.firebaseapp.com",
  projectId: "online-media-23cc6",
  storageBucket: "online-media-23cc6.appspot.com",
  messagingSenderId: "915520025028",
  appId: "1:915520025028:web:5a1395b7e275bff86db491",
  measurementId: "G-3P7T6WMPLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
