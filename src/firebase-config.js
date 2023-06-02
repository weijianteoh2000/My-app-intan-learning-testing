import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB1_YX4hQIsakmcJxnEuaKbCA3Vs5E9dhA",
    authDomain: "testing04-6cec7.firebaseapp.com",
    projectId: "testing04-6cec7",
    storageBucket: "testing04-6cec7.appspot.com",
    messagingSenderId: "594756186629",
    appId: "1:594756186629:web:e86a977e02a7d7364ee26c",
    measurementId: "G-9Y1M5JM96M"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);
