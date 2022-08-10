import Image from "next/image";
import * as React from "react";
import { useState } from "react";

import Button from "@/components/Button";

function EventBanner({
    title,
    imageSrc,
    city,
    neighborhood,
    address,
    attendees,
    host,
}) {
    const [join, setJoin] = useState("Join");
    function handleJoinClick() {
        if (join === "Join") {
            setJoin("Leave");
        } else {
            setJoin("Join");
        }
    }
    let attendeeAvatars = [];
    attendeeAvatars.push(
        <div className=''>
            <Image
                className='rounded-full'
                src='/images/userAvatar.jpeg'
                alt={`${title},image`}
                width={48}
                height={48}
            />
        </div>
    );
    for (let i = 0; i < 3; i++) {
        attendeeAvatars.push(
            <div className='-ml-6'>
                <Image
                    className='rounded-full'
                    src='/images/userAvatar.jpeg'
                    alt={`${title},image`}
                    width={48}
                    height={48}
                />
            </div>
        );
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
                        <p>{neighborhood}</p>
                        <p>{address}</p>
                    </div>
                </div>
                <div className='flex items-center pt-6'>
                    {attendeeAvatars}
                    <p className='pl-6'>{`+${attendees.length} Attendees`}</p>
                </div>
                <div className='flex items-center pt-6 pb-12'>
                    <Image
                        className='rounded-full'
                        src='/images/userAvatar.jpeg'
                        alt='avatar image'
                        width={48}
                        height={48}
                    />
                    <p className='pl-6'>{`Organized by ${host}`}</p>
                </div>
                <Button
                    label={join}
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
