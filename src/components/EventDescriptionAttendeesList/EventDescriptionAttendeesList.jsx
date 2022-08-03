import React from "react";

import AttendeesList from "@/components/EventDescriptionAttendeesList/AttendeesList";
import EventDescription from "@/components/EventDescriptionAttendeesList/EventDescription";

function EventDescriptionAttendeesList({ description, attendees }) {
    return (
        <div className='flex flex-col md:justify-center lg:flex-row'>
            <div className="flex-1">
                <EventDescription description={description} />
            </div>
            <div className="flex-1">
                <AttendeesList attendees={attendees} />
            </div>
        </div>
    );
}

export default EventDescriptionAttendeesList;
