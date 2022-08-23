import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

import EventCreation from "@/components/EventCreation";
import Layout from "@/components/layout/Layout";

const Eventcreation = () => {
    return (
        <div>
            <Layout>
                <EventCreation />
            </Layout>
        </div>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

export default Eventcreation;
