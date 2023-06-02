import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDF7vOVkWcN4wA1W_iRVFy8-e2KqLT4s6M",
    authDomain: "tutorial03-e4a5c.firebaseapp.com",
    projectId: "tutorial03-e4a5c",
    storageBucket: "tutorial03-e4a5c.appspot.com",
    messagingSenderId: "694599540775",
    appId: "1:694599540775:web:c120ee3abf68649e916e02",
    measurementId: "G-XB7KY2H6BJ"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);
