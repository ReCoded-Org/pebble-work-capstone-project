import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import useAuth from "@/hooks/useAuth";

import Button from "@/components/Button";

const EventCards = ({ events = [], isJoined = {}, handleJoinClick }) => {
    const { t } = useTranslation("common");
    const { auth } = useAuth();

    return (
        <div>
            {events.map((event) => (
                <Link href={`/${event._id}`} key={event._id}>
                    <div
                        key={event._id}
                        className='mx-6 mb-4 rounded-md border shadow-lg sm:mx-4'
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
                                                        src={
                                                            volunteer.profileImage
                                                        }
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
                                                isJoined[event._id]
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
                                        <div className='text-blue flex flex-row items-center '>
                                            <Link
                                                className='hover:pointer'
                                                href='/signin'
                                            >
                                                <p className='text-primary-200 underline'>
                                                    {t("common.nav.signIn")}
                                                </p>
                                            </Link>
                                            &nbsp;OR&nbsp;
                                            <Link href='/signup'>
                                                <p className='text-primary-200 underline'>
                                                    {t("common.nav.signUp")}
                                                </p>
                                            </Link>
                                            &nbsp;to join events.
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
