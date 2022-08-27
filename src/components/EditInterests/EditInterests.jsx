import { useTranslation } from "next-i18next";
import { useState } from "react";

import Button from "@/components/Button";

const EditInterests = ({ beforeClick, afterClick }) => {
    const { t } = useTranslation("common");
    const labels = [
        "noPoverty",
        "zeroHunger",
        "goodHealthAndWellbeing",
        "qualityEducation",
        "genderEquality",
        "cleanWaterAndSanitation",
        "affordableAndCleanEnergy",
        "decentWorkAndEconomicGrowth",
        "industryInnovationAndInfrastructure",
        "reducedInequalities",
        "sustainableCitiesAndCommunities",
        "responsibleConsumptionAndProduction",
        "climateAction",
        "lifeBelowWater",
        "lifeOnLand",
        "peaceJusticeAndStrongInstitutions",
        "partnershipForTheGoals",
    ];
    const [selected, setSelected] = useState([]);

    const handleClick = (label) => {
        setSelected([...selected, label]);
        if (selected.includes(label)) {
            setSelected(selected.filter((item) => item !== label));
        }
    };

    return (
        <div className='m-4 md:m-12'>
            <div className='flex flex-wrap items-center justify-center overflow-hidden lg:ml-8 lg:flex-row lg:flex-wrap lg:items-start lg:justify-start'>
                {labels.map((label) => (
                    <div key={label} className='m-1 md:m-2 lg:m-3'>
                        <Button
                            label={t(`editProfilePage.${label}`)}
                            bgColor={
                                selected.includes(label)
                                    ? "bg-primary-200"
                                    : "bg-white"
                            }
                            fontWeight='font-medium'
                            width='w-auto'
                            height='h-7 md:h-12 lg:h-12'
                            fontSize='text-[9px] md:text-xl lg:text-lg'
                            border='border lg:border-2'
                            customStyle={
                                selected.includes(label)
                                    ? `${afterClick}`
                                    : `text-black ${beforeClick}`
                            }
                            onClick={() => handleClick(label)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditInterests;
