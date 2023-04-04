import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // your firebase config object
    apiKey: "AIzaSyA1erpANR182UiRahkLz1J34iL8RxIMg-8",
    authDomain: "taskmanagment-5a6ee.firebaseapp.com",
    projectId: "taskmanagment-5a6ee",
    storageBucket: "taskmanagment-5a6ee.appspot.com",
    messagingSenderId: "924588065987",
    appId: "1:924588065987:web:174548841ab3c91323ce76"
  };
  
    // Initialize Firebase
    const app: FirebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(app)

    export  {auth}