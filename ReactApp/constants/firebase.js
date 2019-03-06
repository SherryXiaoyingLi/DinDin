// import app from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase'
import * as firebase from 'firebase'
import React from 'react';

const config = { 
    apiKey: "AIzaSyD6a5oYLkj-KoUA4PFa4fXiDCADzTGhNqs",
    authDomain: "friendlychat-7958c.firebaseapp.com",
    databaseURL: "https://friendlychat-7958c.firebaseio.com",
    projectId: "friendlychat-7958c",
    storageBucket: "friendlychat-7958c.appspot.com",
    messagingSenderId: "986564537987"
}

export default class Firebase extends React.Component{
    constructor(prop) {
        super(prop)

       // app.initializeApp(config);
        // this.db = app.database();
        // this.auth = app.auth();
    }
    // doCreateUserWithEmailAndPassword = (email, password) =>
    // this.auth.createUserWithEmailAndPassword(email, password);

    // doSignInWithEmailAndPassword = (email, password) =>
    // this.auth.signInWithEmailAndPassword(email, password);

    // doSignOut = () => this.auth.signOut();

    // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    // doPasswordUpdate = password =>
    // this.auth.currentUser.updatePassword(password);

    
}





