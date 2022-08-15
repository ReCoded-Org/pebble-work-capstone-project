import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBeZ_eLwKgMHJF1gfrXXU2fc6hyjtpNT2I",
    authDomain: "pebble-b4e09.firebaseapp.com",
    projectId: "pebble-b4e09",
    storageBucket: "pebble-b4e09.appspot.com",
    messagingSenderId: "922805211383",
    appId: "1:922805211383:web:84cde6ea56e0ee3e5843f2",
};
if (!firebase.getApps) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
