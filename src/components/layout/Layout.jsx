import * as React from "react";

import Footer from "./Footer";
import Button from "../../components/button/Button";

export default function Layout({ children }) {
    // Put Header or Footer around the children element

    return (
        <>
            {children}
            <div className='w-max rounded border-sky-700 bg-secondary-300  hover:bg-sky-700'>
                <Button>Get started</Button>
            </div>
            <Footer />
        </>
    );
}
