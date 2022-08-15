import * as React from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";

import Footer from "./Footer";
import Navbar from "../Navbar";
import { UserContext } from "../../../lib/context";
import { auth, firestore } from "../../../lib/firebase";

export default function Layout({ children }) {
    // Grab the user object from Firebase
    const [user] = useAuthState(auth);

    useEffect(() => {
        let unsubscribe;

        if (user) {
            const ref = firestore.collection("users").doc(user.id);
            unsubscribe = ref.onSnapshot();
        }
        return unsubscribe;
    }, [user]);

    return (
        <UserContext.Provider value={{ user }}>
            <header>
                <Navbar />
            </header>
            {children}
            <Footer />
            <Toaster />
        </UserContext.Provider>
    );
}
