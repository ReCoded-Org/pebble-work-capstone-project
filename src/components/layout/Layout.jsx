import React, { useState } from "react";

import Footer from "./Footer";
import Navbar from "../Navbar";
export default function Layout({ children }) {
    // Put Header or Footer around the children element
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);
    const open = () => {
        setShowMobileDropdown((b) => !b);
    };
    const closeMobileMenu = () => {
        setShowMobileDropdown(false);
    };
    return (
        <div className='relative flex min-h-screen flex-col justify-between '>
            <Navbar
                open={open}
                showMobileDropdown={showMobileDropdown}
                closeMobileMenu={closeMobileMenu}
            />
            {showMobileDropdown && (
                <div className=' fixed z-[49] h-screen w-full bg-black opacity-75'></div>
            )}
            {children}
            <Footer />
        </div>
    );
}
