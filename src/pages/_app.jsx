import { appWithTranslation } from "next-i18next";

import "@/styles/navbar.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
