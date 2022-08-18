import Image from "next/image";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { useState } from "react";

import Button from "@/components/Button";

function EventBanner({
    title,
    imageSrc,
    city,
    country,
    address,
    dateTime,
    attendees,
    attendeeProfileURLs,
    host,
    hostProfileURL,
}) {
    const { t } = useTranslation("common");
    const [join, setJoin] = useState(false);
    function handleJoinClick() {
        setJoin(!join);
    }
    const date = dateTime.split('T')[0];
    console.log(date)
    const dateArray = date.split('-');
    const dateDayMonthYear = [dateArray[2],dateArray[1],dateArray[0]]
    const longDate = dateDayMonthYear.join(".");
    
    const time = dateTime.split('T')[1]
    let attendeeAvatars = [];
    if (attendees.length > 0) {
        attendeeAvatars.push(
            <div className=''>
                <Image
                    className='rounded-full'
                    src={attendeeProfileURLs[0]}
                    alt={`${title} image`}
                    width={48}
                    height={48}
                />
            </div>
        );
        if (attendees.
            ength < 3) {
            for (let i = 1; i < attendees.length; i++) {
                attendeeAvatars.push(
                    <div className='-ml-6'>
                        <Image
                            className='rounded-full'
                            src={attendeeProfileURLs[i]}
                            alt={`${title},image`}
                            width={48}
                            height={48}
                        />
                    </div>
                );
            }
        } else {
            for (let i = 1; i < 3; i++) {
                attendeeAvatars.push(
                    <div className='-ml-6'>
                        <Image
                            className='rounded-full'
                            src={attendeeProfileURLs[i]}
                            alt={`${title},image`}
                            width={48}
                            height={48}
                        />
                    </div>
                );
            }
        }         
    }
    
    return (
        <div className='grid-col-1 grid grid-flow-row gap-2 md:grid-cols-3 md:gap-2 md:p-6'>
            <h1 className='order-1 col-span-1 p-6 text-center text-2xl font-semibold md:order-first md:col-span-3 md:text-left md:text-4xl md:font-normal'>
                {title}
            </h1>
            <div className='border-first col-span-1 flex justify-center px-6 md:order-1 md:col-span-2 md:pl-0 md:pb-6'>
                <Image
                    className='rounded'
                    src={imageSrc}
                    alt={`${title},image`}
                    width={600}
                    height={400}
                />
            </div>
            <div className='order-last col-span-1 flex flex-col items-center pb-6  md:items-start md:justify-items-start md:pt-12'>
                <div className='flex'>
                    <svg
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M21.0001 3.5C13.2809 3.5 7.00014 9.78075 7.00014 17.4913C6.94939 28.77 20.4681 38.122 21.0001 38.5C21.0001 38.5 35.0509 28.77 35.0001 17.5C35.0001 9.78075 28.7194 3.5 21.0001 3.5ZM21.0001 24.5C17.1326 24.5 14.0001 21.3675 14.0001 17.5C14.0001 13.6325 17.1326 10.5 21.0001 10.5C24.8676 10.5 28.0001 13.6325 28.0001 17.5C28.0001 21.3675 24.8676 24.5 21.0001 24.5Z'
                            fill='black'
                        />
                    </svg>
                    <div>
                        <p>
                            <b>{city}</b>
                        </p>
                        <p>{country}</p>
                        <p>{address}</p>
                    </div>
                </div>
                <div className='flex pt-6 pl-2'>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14ZM19.9909 17.5546L15.2727 12.8365V5.72727C15.2727 5.02436 14.7029 4.45455 14 4.45455C13.2971 4.45455 12.7273 5.02436 12.7273 5.72727V13.3636C12.7273 13.7012 12.8614 14.0249 13.1 14.2636L18.191 19.3545C18.688 19.8515 19.4938 19.8515 19.9909 19.3545C20.4879 18.8575 20.4879 18.0516 19.9909 17.5546Z" fill="#1A1A1A"/>
                    </svg>
                    <div className='pl-2'>
                        <p>{longDate}</p>
                        <p>{time.slice(0,8)}</p>
                    </div>
                </div>
                



                <div className='flex items-center pt-6'>
                    {attendeeAvatars}
                    <p className='pl-6'>
                        {attendees.length===0?
                        t("eventViewPage.eventBanner.noAttendees"):
                        attendees.length===1?t("eventViewPage.eventBanner.oneAttendee"):attendees.length + " " + t("EventViewPage.eventBanner.manyAttendees")}
                    </p>
                </div>
                <div className='flex items-center pt-6 pb-12'>
                    <Image
                        className='rounded-full'
                        src={hostProfileURL}
                        alt='avatar image'
                        width={48}
                        height={48}
                    />
                    <p className='pl-6'>{`Organized by ${host}`}</p>
                </div>
                <Button
                    label={join?t("eventViewPage.eventBanner.join"):t("eventViewPage.eventBanner.leave")}
                    bgColor='bg-primary-200'
                    textColor='text-white'
                    height='h-12'
                    width='w-48'
                    onClick={handleJoinClick}
                />
            </div>
        </div>
    );
}

export default EventBanner;
