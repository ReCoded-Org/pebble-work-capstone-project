import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";
import HowItWorks from "@/components/HowItWorks";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />
            <HowItWorks />
        </div>
    );
}

export default appWithTranslation(MyApp);
