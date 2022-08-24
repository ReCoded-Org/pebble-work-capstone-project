import { appWithTranslation } from "next-i18next";

import "@/styles/navbar.css";
import "@/styles/globals.css";
import "@/styles/calendarStyle.css";

import { AuthProvider } from "@/context/AuthProvider";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
