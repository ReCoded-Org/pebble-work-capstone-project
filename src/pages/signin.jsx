import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Layout from "@/components/layout/Layout";
import SignIn from "@/components/SignInUp/SignIn";

const signin = () => {
    return (
        <div>
            <Layout>
                <SignIn />
            </Layout>
        </div>
    );
};

export default signin;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
