import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCNOdW1NGRRuFRFLbPdJ7zQptUB-ibQ0vI",
  authDomain: "login-4f9d8.firebaseapp.com",
  databaseURL: "https://login-4f9d8.firebaseio.com",
  projectId: "login-4f9d8",
  storageBucket: "login-4f9d8.appspot.com",
  messagingSenderId: "15910328874"
};
const fire = firebase.initializeApp(config);
export default fire;