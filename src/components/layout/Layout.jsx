import * as React from "react";

import Footer from "./Footer";
import Signup from "../signinup/Signup";
export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <Signup title='Sign in' />
            {children}
            <Footer />
        </>
    );
}
