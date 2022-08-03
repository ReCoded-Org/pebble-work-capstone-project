import * as React from "react";

import Footer from "./Footer";
import EventCreation from "../eventCreation/EventCreation";
import Navbar from "../Navbar";

export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <header>
                <Navbar />
            </header>
            <EventCreation />
            {children}
            <Footer />
        </>
    );
}
