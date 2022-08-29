import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { toast } from "react-hot-toast";

import useAuth from "@/hooks/useAuth";

import Button from "@/components/Button";

import axios from "@/api/axios";

const EventCards = ({ events = [] }) => {
    const { t } = useTranslation("common");
    const { auth } = useAuth();
    const [followedEventIDs, setFollowedEventIDs] = useState([]);
    const updateUserFollowingEvents = async () => {
        // 1. get the user object
        const response = await axios({
            method: "get",
            url: `/api/user`,
            withCredentials: true
        })
        // 2. get all the followed event ids from user, and set them equal to the state
        const followedEvents = response.data.followedEvents;
        const tempFollowedEventIDs = [];
        for (let i = 0; i < followedEvents.length; i++) {
            tempFollowedEventIDs.push(followedEvents[i]._id);
        }
        setFollowedEventIDs(tempFollowedEventIDs);
    }
    updateUserFollowingEvents();

    // JOIN / LEAVE AN EVENT
    const [isJoined, setIsJoined] = useState({});
    const handleJoinClick = async (id) => {
        
        // API Call to join event
        // user is not already joined:
        if (!followedEventIDs.includes(id)) {
            //console.log('')
            //post user to event
            const responseJoin = await axios({
                method: "post",
                url: `/api/event/${id}/volunteers`,
                withCredentials: true,
            });
            updateUserFollowingEvents();
            toast.success(responseJoin.data.message);
        }
        else {
            // delete user from event
            const responseLeave = await axios({
                method: "delete",
                url: `/api/event/${id}/volunteers`,
                withCredentials: true,
            });
            updateUserFollowingEvents();
            toast.success(responseLeave.data.message);
        }
        
    }
    

            
    return (
        <div>
            {events.map((event) => (
                <Link className='' href={`/${event._id}`} key={event._id}>
                    <div
                        key={event._id}
                        className='mx-6 mb-4 rounded-md border shadow-lg hover:cursor-pointer sm:mx-4'
                    >
                        <div className='mx-4 mt-4 flex flex-col text-center sm:flex-row sm:justify-between'>
                            <h2 className='mb-2 sm:mb-0'>
                                {`${event.date.split("T")[0]}, ${event.date
                                    .split("T")[1]
                                    .slice(0, 8)}`}{" "}
                                {t("eventsPage.eventCards.in")}{" "}
                                {event.address.city}
                            </h2>
                            <div className='flex flex-col justify-between sm:flex-row sm:gap-2'>
                                <div className='flex justify-center pl-3'>
                                    {event.confirmedVolunteers.length === 0 ? (
                                        <h1>
                                            {t(
                                                "eventsPage.eventCards.noAttendeesYet"
                                            )}
                                        </h1>
                                    ) : (
                                        event.confirmedVolunteers
                                            .slice(0, 4)
                                            .map((volunteer) => (
                                                <div
                                                    key={volunteer._id}
                                                    className='-ml-3'
                                                >
                                                    <Image
                                                        className='rounded-full'
                                                        src={volunteer.profileImage===undefined?"/images/userAvatar.jpeg":volunteer.profileImage}
                                                        alt='user-images'
                                                        width={25}
                                                        height={25}
                                                    />
                                                </div>
                                            ))
                                    )}
                                </div>
                                {event.confirmedVolunteers.length ===
                                0 ? null : event.confirmedVolunteers.length ===
                                  1 ? (
                                    <h1>
                                        {t(
                                            "eventsPage.eventCards.only1Attendee"
                                        )}
                                    </h1>
                                ) : event.confirmedVolunteers.length >= 2 &&
                                  event.confirmedVolunteers.length <= 3 ? (
                                    <h1>
                                        {" "}
                                        {event.confirmedVolunteers.length}{" "}
                                        {t("eventsPage.eventCards.attendees")}
                                    </h1>
                                ) : event.confirmedVolunteers.length >= 3 ? (
                                    <h1>
                                        + {event.confirmedVolunteers.length - 3}{" "}
                                        {t("eventsPage.eventCards.attendees")}
                                    </h1>
                                ) : null}
                            </div>
                        </div>
                        <div className='m-4 grid-cols-3 content-center gap-4 sm:grid'>
                            <div className='relative col-span-1 mb-4 h-36 overflow-hidden rounded-md border-2 border-black sm:mb-0'>
                                <Image
                                    src={event.coverImage}
                                    alt='event-card-image'
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>
                            <div className='col-span-2 flex flex-col justify-between text-center sm:text-left'>
                                <div>
                                    <h1 className='text-2xl font-bold line-clamp-1'>
                                        {event.title}
                                    </h1>
                                    <p className='line-clamp-4 sm:line-clamp-2'>
                                        {event.content}
                                    </p>
                                </div>
                                <div className='mt-2 flex items-end justify-center sm:justify-end '>
                                    {/* if user signed in show join leave buttons */}
                                    {auth?.email && (
                                        <Button
                                            label={
                                                followedEventIDs.includes(event._id)
                                                    ? t(
                                                          "eventsPage.eventCards.leave"
                                                      )
                                                    : t(
                                                          "eventsPage.eventCards.join"
                                                      )
                                            }
                                            textColor='text-white'
                                            bgColor='bg-primary-200'
                                            borderColor='border-primary-200'
                                            height='h-10'
                                            width='w-24'
                                            customStyle='mx-2 my-0'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleJoinClick(event._id);
                                            }}
                                        />
                                    )}
                                    {/* if user is NOT signed in show sign in or sign up buttons */}
                                    {!auth?.email && (
                                        <div className='text-blue m-2 flex flex-row flex-wrap justify-center hover:cursor-default'>
                                            {t(
                                                "eventsPage.eventCards.toJoinTurkish"
                                            )}
                                            &nbsp;
                                            <Link className='' href='/signin'>
                                                <p className='text-primary-200 underline hover:cursor-pointer'>
                                                    {t(
                                                        "eventsPage.eventCards.signIn"
                                                    )}
                                                </p>
                                            </Link>
                                            &nbsp;
                                            {t("eventsPage.eventCards.or")}
                                            &nbsp;
                                            <Link href='/signup'>
                                                <p className='text-primary-200 underline hover:cursor-pointer'>
                                                    {t(
                                                        "eventsPage.eventCards.signUp"
                                                    )}
                                                </p>
                                            </Link>
                                            &nbsp;
                                            {t(
                                                "eventsPage.eventCards.toJoinEnglish"
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default EventCards;
