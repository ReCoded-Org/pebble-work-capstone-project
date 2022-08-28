import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React from "react";
import { useState } from "react";

import axios from "@/api/axios";

function AttendeesList({ attendees, attendeeProfileURLs }) {
    const { t } = useTranslation("common");
    const [attendeeList, setAttendeeList] = useState(attendees);
    const [attendeeUrlList, setAttendeeUrlList] = useState(attendeeProfileURLs);
    const router = useRouter(); // get router
    const eventId = router.asPath; // return eventid with a slash before it "/[eventID]""

    const updateAttendees = async () => {
        // first get the event info using eventid
        const event = await axios({
            method: "get",
            url: `/api/event${eventId}/`,
            withCredentials: true
        })
        //console.log("Event",event.data.confirmedVolunteers);
        // then update attendees and their profile urls with the info from server
        const allAttendees = event.data.confirmedVolunteers
        let tempAttendees = []
        let tempAttendeeURLs = []
        for (let i = 0; i < allAttendees.length; i++) {
            tempAttendees.push(allAttendees[i].firstName)
            tempAttendeeURLs.push(allAttendees[i].profileImage)
        }
        setAttendeeList(tempAttendees);
        setAttendeeUrlList(tempAttendeeURLs);
    }
    

    // initialize and update attendee avatars by getting the info from server
    let attendeeAvatars = [];
    function updateAvatars() {
        updateAttendees();
        for (let i = 0; i < attendeeList.length; i++) {
            attendeeAvatars.push(
                <div key={i + 1} className='flex h-full flex-col space-y-2'>
                    <Image
                        className='rounded-full'
                        src={attendeeUrlList[i]}
                        alt={`${attendees[i]} avatar image`}
                        width={48}
                        height={48}
                        objectFit="cover"
                        layout="responsive"
                    />
                    <p className='text-center'>{attendeeList[i]}</p>
                </div>
            );
        }
    }
    updateAvatars();
    
    return (
        <div className='p-6'>
            <p className='pb-6'>
                <b>{t("eventViewPage.attendeesList.attendees")}</b>
            </p>
            <div className='grid grid-cols-4 items-center gap-10 md:grid-cols-6 lg:grid-cols-4'>
                {attendeeAvatars}
            </div>
        </div>
    );
}

export default AttendeesList;
