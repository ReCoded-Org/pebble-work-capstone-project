import * as React from "react";

import Footer from "./Footer";
import Signupin from "../signinup/Signupin";
export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <Signupin title='Sign up' />
            {children}
            <Footer />
        </>
    );
}
