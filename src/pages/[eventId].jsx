// to test out the API, use these links. We are using the eventId as the URL for each event.
// localhost:3000/62f7916d405fb6803a9b0057
// localhost:3000/62e980586aca79a3936917ef
// localhost:3000/62e980586aca79a3936917f1
// localhost:3000/62e980586aca79a3936917f3
// localhost:3000/62e980586aca79a3936917f4
// localhost:3000/62e980586aca79a3936917f5
// localhost:3000/62e980586aca79a3936917f6
// localhost:3000/62e980586aca79a3936917f7
// localhost:3000/62e980586aca79a3936917f2

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import EventBanner from "@/components/EventBanner";
import EventDescriptionAttendeesList from "@/components/EventDescriptionAttendeesList";
import Layout from "@/components/layout/Layout";

export async function getStaticPaths() {
    const events = await fetch(
        "https://pebble-work.herokuapp.com/api/event/"
    ).then((r) => r.json());
    let eventPaths = [];
    events.map((event) => {
        const eventId = event._id;
        eventPaths.push({ params: { eventId: eventId }, locale: "en" });
        eventPaths.push({ params: { eventId: eventId }, locale: "tr" });
    });
    return {
        paths: eventPaths,
        fallback: false,
    };
}

export async function getStaticProps({ params, locale }) {
    const events = await fetch(
        "https://pebble-work.herokuapp.com/api/event/"
    ).then((r) => r.json());
    let event;
    for (let i = 0; i < events.length; i++) {
        if (events[i]._id === params.eventId) {
            event = events[i];
        }
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            event,
        },
    };
}

export default function EventViewPage({ event }) {
    //console.log("Event",event);

    // initialize and update volunteers, their profiles, and their IDs in three different arrays
    let volunteers = [];
    let volunteerProfileURLs = [];
    let volunteerIDs = [];
    for (let i = 0; i < event.confirmedVolunteers.length; i++) {
        volunteers.push(event.confirmedVolunteers[i].firstName);
        volunteerProfileURLs.push(
            event.confirmedVolunteers[i].profileImage === undefined
                ? "/images/userAvatar.jpeg"
                : event.confirmedVolunteers[i].profileImage
        );
        volunteerIDs.push(event.confirmedVolunteers[i]._id);
    }

    // initialize hosts profile URL. If it doesn't exist, make it the default image
    let hostProfileURL = event.publisherId
        ? event.publisherId.profileImage
        : "/images/userAvatar.jpeg";
    if (hostProfileURL === undefined) {
        hostProfileURL = "/images/userAvatar.jpeg";
    }

    return (
        <Layout>
            <EventBanner
                title={event.title}
                imageSrc={event.coverImage}
                city={event.address.city}
                country={event.address.country}
                address={event.address.addressLine}
                dateTime={event.date}
                attendees={volunteers}
                attendeeProfileURLs={volunteerProfileURLs}
                attendeeIDs={volunteerIDs}
                host={event.publisherId ? event.publisherId.firstName : "N/A"}
                hostProfileURL={hostProfileURL}
                latitude={event.location.lat}
                longitude={event.location.log}
            />
            <EventDescriptionAttendeesList
                description={event.content}
                attendees={volunteers}
                attendeeProfileURLs={volunteerProfileURLs}
            />
        </Layout>
    );
}
