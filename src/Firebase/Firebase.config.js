// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK0UdR4zE2hRCX5EtgQ7X6CkX59VBi0HE",
  authDomain: "tna-server.firebaseapp.com",
  projectId: "tna-server",
  storageBucket: "tna-server.appspot.com",
  messagingSenderId: "676631685251",
  appId: "1:676631685251:web:d9074fa27ab4ab5db513b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;