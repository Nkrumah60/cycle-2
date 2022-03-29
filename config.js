import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAMkrlw7jQwHM2K6EtWnuUD-LN3FTZpeqk",
    authDomain: "p-71-8e010.firebaseapp.com",
    projectId: "p-71-8e010",
    storageBucket: "p-71-8e010.appspot.com",
    messagingSenderId: "862467274103",
    appId: "1:862467274103:web:bc077f4ec975bb9bc79d72"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
