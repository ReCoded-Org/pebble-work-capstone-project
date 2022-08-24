import Image from "next/image";
import { useTranslation } from "next-i18next";
import React from "react";

function AttendeesList({ attendees, attendeeProfileURLs }) {
    const { t } = useTranslation("common");
    let attendeeAvatars = [];
    for (let i = 0; i < attendees.length; i++) {
        attendeeAvatars.push(
            <div key={i + 1} className='flex h-full flex-col space-y-2'>
                <Image
                    className='rounded-full object-contain'
                    src={attendeeProfileURLs[i]}
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
                <b>{t("eventViewPage.attendeesList.attendees")}</b>
            </p>
            <div className='grid grid-cols-4 items-center gap-10 md:grid-cols-6 lg:grid-cols-4'>
                {attendeeAvatars}
            </div>
        </div>
    );
}

export default AttendeesList;
