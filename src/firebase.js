// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5gRz3JJ06th0iFVbQ315wkCUWEw0PB60",
    authDomain: "sneakersloop.firebaseapp.com",
    projectId: "sneakersloop",
    storageBucket: "sneakersloop.appspot.com",
    messagingSenderId: "465951552111",
    appId: "1:465951552111:web:8b773d1fd157c94559d39a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app