// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { useEffect, useState } from "react";

import Footer from "./Footer";
import Navbar from "../Navbar";
export default function Layout({ children }) {
    // const { t } = useTranslation("common");
    // Put Header or Footer around the children element
    const [message, setMessage] = useState("");
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:8000/api/user", {
                    credentials: "include",
                });

                const content = await response.json();
                // ${t("common.nav.SignedInAs")}
                setMessage(`Hi, ${content.name}`);
                setAuth(true);
            } catch (e) {
                setMessage("You are not logged in");
                setAuth(false);
            }
        })();
    });

    return (
        <div className='flex min-h-screen flex-col justify-between '>
            <header>
                <Navbar auth={auth} message={message} />
            </header>
            {children}
            <footer className='flex  items-center justify-center'>
                <Footer />
            </footer>
        </div>
    );
}
