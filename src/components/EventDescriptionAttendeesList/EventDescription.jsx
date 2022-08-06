import React from "react";

function EventDescription({ description }) {
    return (
        <div className='p-6'>
            <p>
                <b>Event Description:</b>
            </p>
            <p>{description}</p>
        </div>
    );
}

export default EventDescription;
