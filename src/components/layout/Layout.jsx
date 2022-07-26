import * as React from "react";

import Footer from "./Footer";
import Button from "../button/Button";
export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            <Button
                label='Get started'
                textColor='text-white'
                bgColor='bg-secondary-300'
                borderColor='border-secondary-300'
                onClick={(e) => console.log("clicked")}
            />

            {children}
            <Footer />
        </>
    );
}
