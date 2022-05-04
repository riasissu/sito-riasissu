const firebaseConfig = {
  apiKey: "AIzaSyDDbBbCydrNYqW8o3lG0vnFvdtlhGzywgo",
  authDomain: "sito-riasissu.firebaseapp.com",
  projectId: "sito-riasissu",
  storageBucket: "sito-riasissu.appspot.com",
  messagingSenderId: "81670035087",
  appId: "1:81670035087:web:433f388c9fe06a522842fa",
  measurementId: "G-WQJ6WP2TKN",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app);

function logIn() {
  console.log("logging in ");
  var userSIEmail = document.getElementById("userSIEmail").value;
  var userSIPassword = document.getElementById("userSIPassword").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userSIEmail, userSIPassword)
    .then((success) => {
      console.log("user logged in");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
function signUp() {
  console.log("signing up ");
  var userSIEmail = document.getElementById("userSIEmail").value;
  var userSIPassword = document.getElementById("userSIPassword").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(userSIEmail, userSIPassword)
    .then((success) => {
      console.log("user created");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
