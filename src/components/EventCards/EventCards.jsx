import Image from "next/image";
import { useState } from "react";

import Button from "../Button/Button";

const EventCards = () => {
    const [isJoined, setIsJoined] = useState(false);
    function handleJoinClick() {
        setIsJoined(!isJoined);
    }

    let attendeeAvatars = [];
    for (let i = 0; i < 3; i++) {
        attendeeAvatars.push(
            <div key={i} className='-ml-3'>
                <Image
                    src='/images/userAvatar.jpeg'
                    alt='user-images'
                    width={25}
                    height={25}
                />
            </div>
        );
    }
    return (
        <div className='m-5 rounded-md border shadow-lg '>
            <div className='mx-4 mt-4 flex flex-col text-center sm:flex-row sm:justify-between'>
                <h2 className='mb-2 sm:mb-0'>FRI, JUL -7:00 PM GMT+3</h2>
                <div className='flex flex-col justify-between sm:flex-row sm:gap-2'>
                    <div className='flex justify-center pl-3'>
                        {attendeeAvatars}
                    </div>
                    <p>+12 Attendees</p>
                </div>
            </div>
            <div className='m-4 grid-cols-3 content-center gap-4 sm:grid'>
                <div className='relative col-span-1 mb-4 h-48 overflow-hidden rounded-md border-2 border-black sm:mb-0'>
                    <Image
                        src='/images/event-image.jpg'
                        alt='event-card-image'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className='col-span-2 flex flex-col justify-between text-center sm:text-left'>
                    <div>
                        <h1 className='text-2xl font-bold line-clamp-1'>
                            Title Of The Event
                        </h1>
                        <p className='line-clamp-4'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Reprehenderit tempore placeat voluptate
                            officia illo harum enim nulla sunt corporis illum
                            mollitia explicabo ipsam sequi, provident labore
                            perspiciatis tenetur. Magnam sunt, saepe ducimus
                            facere blanditiis possimus tenetur odio error ab
                            esse nobis aperiam alias iusto amet quam,
                            accusantium magni animi eligendi.
                        </p>
                    </div>
                    <div className='mt-2 flex items-end justify-center sm:justify-end '>
                        <Button
                            label={isJoined ? "LEAVE" : "JOIN"}
                            textColor='text-white'
                            bgColor='bg-primary-200'
                            borderColor='border-primary-200'
                            height='h-10'
                            width='w-24'
                            onClick={handleJoinClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCards;
