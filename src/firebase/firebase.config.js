// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs2l0pupVmRcFV6CD6M-dgxqnU4Fte15g",
    authDomain: "medico-health-prime.firebaseapp.com",
    projectId: "medico-health-prime",
    storageBucket: "medico-health-prime.appspot.com",
    messagingSenderId: "956370858266",
    appId: "1:956370858266:web:f9a53c204c996f06ef7ca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;