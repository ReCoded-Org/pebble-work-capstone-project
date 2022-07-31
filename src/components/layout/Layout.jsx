import * as React from "react";

import Footer from "./Footer";
import ChooseLocationAndEventType from "../eventCreation/ChooseLocationAndEventType";
import Navbar from "../Navbar";

export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <header>
                <Navbar />
            </header>
            <ChooseLocationAndEventType />
            {children}
            <Footer />
        </>
    );
}
