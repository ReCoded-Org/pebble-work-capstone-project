import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import ChangePassword from "@/components/ChangePassword";
import EditInterests from "@/components/EditInterests";
import Layout from "@/components/layout/Layout";
import NameLocation from "@/components/NameLocation";

export default function HomePage() {
    const { t } = useTranslation("common");

    return (
        <Layout>
            <p>{t("test")}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Link href='/' locale='en'>
                    <a>English</a>
                </Link>
                <Link href='/' locale='ar'>
                    <a>Arabic</a>
                </Link>
                <Link href='/' locale='tr'>
                    <a>Turkish</a>
                </Link>
            </div>
            <NameLocation />
            <h2 className='text-md mt-4 ml-8 font-medium md:mt-8 md:ml-20 md:text-2xl lg:mt-16 lg:ml-24 lg:text-3xl'>
                Your Interests
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
