// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOyzvRq4ls1iQCqpzGmrg3LVKKn__2mHo",
    authDomain: "campus-hunter.firebaseapp.com",
    projectId: "campus-hunter",
    storageBucket: "campus-hunter.appspot.com",
    messagingSenderId: "765604474121",
    appId: "1:765604474121:web:1ff3298b9b461dc97bf7d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;