import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import EventBanner from "@/components/EventBanner"
import Layout from "@/components/layout/Layout";

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
            <EventBanner 
                title="Izmir Clean Energy Brainstorming and Slashing Things Up Meetup (with a very long title)"
                imageSrc="/images/sampleEventImage.jpg"
                city="Izmir, Turkey"
                neighborhood="Mimar Sinan Mahallesi"
                address="26 Ağustos Kapısı"
                attendees={['April','Bob','Sue','Jimbo']}
                host="Jangis M."
            />
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
