import * as firebase from "firebase";
// Your web app's Firebase configuration

var config = {
  apiKey: "AIzaSyCs6LZB94R5gqVmo72Ay4-xzrhEtMvNt_U",
  authDomain: "diary-c60a3.firebaseapp.com",
  databaseURL: "https://diary-c60a3.firebaseio.com",
  projectId: "diary-c60a3",
  storageBucket: "diary-c60a3.appspot.com",
  messagingSenderId: "800177194509",
  appId: "1:800177194509:web:8115e85e24912792"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.database().ref("/notes");

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, auth, database, googleProvider };
