/**
 * Imports
 */
import { $, createDomElement, Component } from '../helpers/helper';
import { FirebaseConfig } from '../../../firebase.json';

export class AuthtenticationService {
  constructor( firebase ) {

    this.config = {
      "apiKey": "AIzaSyCP4AWjsN7xhIDBNqp5DZPvjypT6veihm4",
      "authDomain": "colorama-fadu.firebaseapp.com",
      "databaseURL": "https://colorama-fadu.firebaseio.com",
      "projectId": "colorama-fadu",
      "storageBucket": "colorama-fadu.appspot.com",
      "messagingSenderId": "921648506580"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(this.config);
  }

    this.getLoginWithGoogle = this._loginWithGoogle;

  }

  _loginWithGoogle() {
    if (!firebase.auth().currentUser) {

      let provider = new firebase.auth.GoogleAuthProvider();

      provider.addScope('https://www.google.com/auth/plus.login');

      firebase.auth().signInWithPopup(provider)
        .then((result) => {

          let token = result.credential.accesstoken;
          let user = result.user;

          console.log(user);

        })
        .catch((error) => {

          let errorCode = error.code;
          let errorMessage = error.message;
          let errorEmail = error.email;
          let errorCredential = error.credential;

          if (errorCode === 'auth/account-exist-with-different-credential') {
            alert('Is same User');
          }

        });
    } else {
      firebase.auth().signOut();
    }
  }
}
