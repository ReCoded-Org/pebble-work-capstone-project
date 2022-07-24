import * as React from "react";

import Navbar from "@/components/layout/Navbar/Navbar";

export default function Layout({ children }) {
    // Put Header or Footer around the children element
    return (
        <>
            <header>
                <Navbar />
            </header>
            {children}
        </>
    );
}
