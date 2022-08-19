import * as React from "react";

import Footer from "./Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <div className='flex min-h-screen flex-col justify-between '>
            <header>
                <Navbar />
            </header>
            {children}
            <footer className='flex  items-center justify-center'>
                <Footer />
            </footer>
        </div>
    );
}
