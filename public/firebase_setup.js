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
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
