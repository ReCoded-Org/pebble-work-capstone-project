import { useTranslation } from "next-i18next";
import React from "react";

function EventDescription({ description }) {
    const { t } = useTranslation("common");
    return (
        <div className='p-6'>
            <p>
                <b>{t("eventViewPage.eventDescription.description")}</b>
            </p>
            <p>{description}</p>
        </div>
    );
}

export default EventDescription;
