import { useRouter } from "next/router";
import React from "react";

import useAuth from "@/hooks/useAuth";

import AttendeesList from "@/components/EventDescriptionAttendeesList/AttendeesList";
import EventDescription from "@/components/EventDescriptionAttendeesList/EventDescription";

import axios from "@/api/axios";

import Button from "../Button";

function EventDescriptionAttendeesList({
    description,
    attendees,
    attendeeProfileURLs,
}) {
    let { auth, setAuth } = useAuth();
    console.log("auth", auth);
    const router = useRouter();
    let isCreator = false;
    let createdEvents = auth?.createdEvents;
    const eventIDRoute = router.asPath;
    const thisEventID = eventIDRoute.substring(1);
    if (createdEvents !== undefined) {
        for (let i = 0; i < createdEvents.length; i++) {
            if (createdEvents[i]._id === thisEventID) {
                isCreator = true;
            }
        }
    }
    const getCreatedEvents = async () => {
        try {
            const response = await axios.get("/api/user", {
                withCredentials: true,
            });
            const authData = { ...auth };
            authData.createdEvents = response.data.createdEvents;
            setAuth(authData);
            router.push("/events");
        } catch (err) {
            console.log(err);
        }
    };
    const deleteEvent = async () => {
        try {
            const response = await axios.delete(`/api/event/${thisEventID}`, {
                withCredentials: true,
            });
            console.log(response);
            getCreatedEvents();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col md:justify-center lg:flex-row'>
                <div className='flex-1 lg:pl-6'>
                    <EventDescription description={description} />
                </div>
                <div className='flex-1 '>
                    <AttendeesList
                        attendees={attendees}
                        attendeeProfileURLs={attendeeProfileURLs}
                    />
                </div>
            </div>
            <div className='flex justify-center p-12'>
                {isCreator && (
                    <Button
                        type='button'
                        label='Delete This Event'
                        bgColor='bg-primary-200'
                        textColor='text-white'
                        fontWeight='font-normal'
                        hoverBgColor='bg-primary-100'
                        height='h-8'
                        width='w-72'
                        onClick={deleteEvent}
                    />
                )}
            </div>
        </div>
    );
}

export default EventDescriptionAttendeesList;
