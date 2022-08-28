import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Layout from "@/components/layout/Layout";
import SignUp from "@/components/SignInUp/SignUp";

const signup = () => {
    return (
        <div>
            <Layout>
                <SignUp />
            </Layout>
        </div>
    );
};

export default signup;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
