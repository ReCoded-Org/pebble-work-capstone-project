import * as React from "react";

import Footer from "./Footer";
import Navbar from "../Navbar";
import EventCreation from "../eventCreation";

export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <header>
                <Navbar />
            </header>
            {children}
            <Footer />
        </>
    );
}
