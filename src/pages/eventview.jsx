// This page will need dynamic routing. Each event will have a different eventID,
// and that event id will be used to create the link for each event. For example:
// localhost:3000/eventID
// For now, to see how the page would look, you need to go to localhost:3000/eventview

// import Link from "next/link";
// import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import EventBanner from "@/components/EventBanner";
import EventDescriptionAttendeesList from "@/components/EventDescriptionAttendeesList";
import Layout from "@/components/layout/Layout";

export default function HomePage() {
    // const { t } = useTranslation("common");

    return (
        <Layout>
            {/* <p>{t("test")}</p>
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
            </div> */}
            <EventBanner
                title='This is some title This is some title This is some title'
                imageSrc='/images/sampleEventImage.jpg'
                city='Izmir'
                neighborhood='Torbaci'
                address='11th Street South, Arlington, Virginia'
                attendees={[
                    "Bob",
                    "Jane",
                    "Steve",
                    "Ahmet",
                    "Mehmet",
                    "Jennifer",
                    "Somebody",
                    "Nobody",
                    "Beyonce",
                    "Cher",
                    "Madonna",
                    "The Rock",
                ]}
                host='Jangis Khan'
            />
            <EventDescriptionAttendeesList
                description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,'
                attendees={[
                    "Bob",
                    "Jane",
                    "Steve",
                    "Ahmet",
                    "Mehmet",
                    "Jennifer",
                    "Somebody",
                    "Nobody",
                    "Beyonce",
                    "Cher",
                    "Madonna",
                    "The Rock",
                ]}
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
