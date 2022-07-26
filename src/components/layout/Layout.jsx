import * as React from "react";
import Getstarted from "../GetStared/Getstarted";

import Footer from "./Footer";
export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <Getstarted />
            {children}
            <Footer />
        </>
    );
}
