import * as React from "react";
import Signinup from "../Signinup/__test__/Signinup";

import Footer from "./Footer";
export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <Signinup />
            {children}
            <Footer />
        </>
    );
}
