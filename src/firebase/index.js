import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD4GA8LZ50V6aifUmO1sHIy7TeLJBnpJmo",
  authDomain: "jonmobile-574d8.firebaseapp.com",
  databaseURL: "https://jonmobile-574d8.firebaseio.com",
  projectId: "jonmobile-574d8",
  storageBucket: "jonmobile-574d8.appspot.com",
  messagingSenderId: "407093189145",
  appId: "1:407093189145:web:e701bac90dec35e1"
};
  // Initialize Firebase
 export const Fire =  firebase.initializeApp(firebaseConfig);