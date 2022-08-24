import React from "react";

import AttendeesList from "@/components/EventDescriptionAttendeesList/AttendeesList";
import EventDescription from "@/components/EventDescriptionAttendeesList/EventDescription";

function EventDescriptionAttendeesList({
    description,
    attendees,
    attendeeProfileURLs,
}) {
    return (
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
    );
}

export default EventDescriptionAttendeesList;
