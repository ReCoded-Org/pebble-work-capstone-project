import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import ChangePassword from "@/components/ChangePassword";
import EditInterests from "@/components/EditInterests";
import Layout from "@/components/layout/Layout";
import NameLocation from "@/components/NameLocation";

export default function editprofile() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation("common");

    return (
        <Layout>
            <NameLocation />
            <h2 className='text-md mt-4 ml-8 font-medium md:mt-8 md:ml-20 md:text-2xl lg:mt-16 lg:ml-24 lg:text-3xl'>
                {t("editProfilePage.interests")}
            </h2>
            <EditInterests beforeClick='text-primary-200  border-primary-200' />
            <ChangePassword />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
