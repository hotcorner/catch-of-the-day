import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC21MKwhXK1gpadB5L43F8jW_G4T7K6-dY",
  authDomain: "rowdy-catch-of-the-day.firebaseapp.com",
  databaseURL: "https://rowdy-catch-of-the-day.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;