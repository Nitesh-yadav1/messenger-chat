import firebase from "firebase/app";
import "firebase/auth";

export const auth= firebase.initializeApp({
        apiKey: "AIzaSyAvRqUYHgyDDaxOFcNKBdYvxUXKT31TIbo",
        authDomain: "messenger-27270.firebaseapp.com",
        projectId: "messenger-27270",
        storageBucket: "messenger-27270.appspot.com",
        messagingSenderId: "784634959712",
        appId: "1:784634959712:web:415516671f669c3e9d3005"
      
}).auth();