import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6QC9_E2VDugm__HYmsapmh7_YOJlP58g",
  authDomain: "vue-firebase-calendar-db39b.firebaseapp.com",
  projectId: "vue-firebase-calendar-db39b",
  storageBucket: "vue-firebase-calendar-db39b.appspot.com",
  messagingSenderId: "113365638371",
  appId: "1:113365638371:web:bdf9bd83ef5e17120339d6"
};

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();
let db = firebase.firestore();

export { auth, db };
