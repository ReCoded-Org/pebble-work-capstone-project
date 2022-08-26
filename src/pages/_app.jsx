import { appWithTranslation } from "next-i18next";
import { Toaster } from 'react-hot-toast';

import "@/styles/navbar.css";
import "@/styles/globals.css";
import "@/styles/calendarStyle.css";

import { AuthProvider } from "@/context/AuthProvider";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
            <Toaster />
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
