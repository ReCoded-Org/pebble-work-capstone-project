import Button from "../Button";
import { useState } from "react";

const EditInterests = ({ beforeClick, afterClick }) => {
    const labels = [
        "No Poverty",
        "Zero Hunger",
        "Good Health and Well-Being",
        "Quality Education",
        "Gender Equality",
        "Clean Water and Sanitation",
        "Affordable and Clean Energy",
        "Decent Work and Economic Growth",
        "Industry, Innovation and Infrastructure",
        "Reduced Inequalities",
        "Sustainable Cities and Communities",
        "Responsible Consumption and Production",
        "Climate Action",
        "Life Below Water",
        "Life On Land",
        "Peace, Justice and Strong Institutions",
        "Partnerships to achieve the Goal",
    ];
    const [selected, setSelected] = useState([]);

    const handleClick = (label) => {
        setSelected([...selected, label]);
        if (selected.includes(label)) {
            setSelected(selected.filter((item) => item !== label));
        }
    };

    return (
        <div className='m-4 mt-12 md:m-12'>
            <h2 className='text-md m-4 font-medium md:m-6 md:text-2xl lg:mt-16 lg:ml-12 lg:text-3xl'>
                Your Interests
            </h2>
            <div className='flex flex-wrap items-center justify-center overflow-hidden lg:ml-8 lg:flex-row lg:flex-wrap lg:items-start lg:justify-start'>
                {labels.map((label) => (
                    <div key={label} className='m-1 md:m-2 lg:m-3'>
                        <Button
                            label={label}
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
                                    : `${beforeClick}`
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
