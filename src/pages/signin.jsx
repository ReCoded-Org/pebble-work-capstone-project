import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import Layout from "@/components/layout/Layout";
import SignInUp from "@/components/SignInUp/SignInUp";

const SignInUppage = () => {
    return (
        <div>
            <Layout>
                <SignInUp title='Sign in' />
            </Layout>
        </div>
    );
};

export default SignInUppage;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
