import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDBiCwG4vkAC4b-r5lo2ED_wLeeGjlbWKw",
  authDomain: "wily-app-77e19.firebaseapp.com",
 databaseURL: "https://wily-app-77e19.firebaseio.com",
  projectId: "wily-app-77e19",
  storageBucket: "wily-app-77e19.appspot.com",
  messagingSenderId: "663443551332",
  appId: "1:663443551332:web:89fb3238a60cbc40511b71"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
