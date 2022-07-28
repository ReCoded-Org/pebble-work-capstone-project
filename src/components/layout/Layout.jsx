import * as React from "react";

import Footer from "./Footer";
import Signin from "../Signinup/__test__/Signin";
import Signup from "../Signinup/__test__/SignUp";
export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <Signup />
            <Signin />
            {children}
            <Footer />
        </>
    );
}
