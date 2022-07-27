import Image from "next/image";
import React from "react";

function AttendeesList({ attendees }) {
    let attendeeAvatars = [];
    for (let i = 0; i < attendees.length; i++) {
        attendeeAvatars.push(
            <div className='flex h-full flex-col space-y-2'>
                <Image
                    className='h-xl rounded-full object-contain'
                    src='/images/userAvatar.jpeg'
                    alt={`${attendees[i]} avatar image`}
                    width={48}
                    height={48}
                />
                <p className='text-center'>{attendees[i]}</p>
            </div>
        );
    }
    return (
        <div className='p-6'>
            <p className='pb-6'>
                <b>Attendees:</b>
            </p>
            <div className='grid grid-cols-4 items-center gap-10 md:grid-cols-6 lg:grid-cols-4'>
                {attendeeAvatars}
            </div>
        </div>
    );
}

export default AttendeesList;
