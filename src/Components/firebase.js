import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCEFUJs0k0ZE5pJ0dVpIpWR5fuVkpVT1iE",
    authDomain: "react-event-app.firebaseapp.com",
    databaseURL: "https://react-event-app.firebaseio.com",
    projectId: "react-event-app",
    storageBucket: "react-event-app.appspot.com",
    messagingSenderId: "794654333446"
  };
  firebase.initializeApp(config);

export default firebase;