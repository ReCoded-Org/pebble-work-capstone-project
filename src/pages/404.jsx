import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";

export default function NotFoundPage() {
    const { t } = useTranslation("common");
    return (
        <Layout>
            <div className='relative flex flex-col items-center justify-center'>
                <Image
                    className='z-1 '
                    src='/svg/404.svg'
                    alt='s'
                    width='700'
                    height='450'
                ></Image>
                <div className='z-2 absolute bottom-1 rounded  border border-[#ebebeb] bg-white p-2 text-2xl text-[#b6b4b4] md:bottom-10 md:text-3xl lg:bottom-12'>
                    <h3>{t("notfoundpage.oops")}</h3>
                </div>
            </div>
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
