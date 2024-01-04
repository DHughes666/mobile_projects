import { initializeApp } from "firebase/app";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBK2iBQNxWgMi1i_Qk2OBaGd1TSqf27Uvo',
  authDomain: 'meals2go-56498.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'meals2go-56498',
  storageBucket: 'meals2go-56498.appspot.com',
  messagingSenderId: '308346714959',
  appId: '1:308346714959:web:9679531c6e46d59c2be33a',
  measurementId: 'G-measurement-id',
};

const appy = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
