import { useState } from "react";

import Button from "@/components/Button";
// ADDED PROPS: CATEGORIES AND SETCATEGORIES
const EditInterests = ({ beforeClick, afterClick, setCategories, categories }) => {
    // Take a look at these these are the back end spelling of categories
    // 'No Poverty',
    // 'Zero Hunger',
    // 'Good Health And Well-Being',
    // 'Quality Education',
    // 'Gender Equality',
    // 'Clean Water And Sanitation',
    // 'Affordable And Clean Energy',
    // 'Decent Work And Economic Growth',
    // 'Industry Innovation And Infrastructure',
    // 'Reduced Inequalities',
    // 'Sustainable Cities And Communities',
    // 'Responsible Consumption And Production',
    // 'Climate Action',
    // 'Life Below Water',
    // 'Life On Land',
    // 'Peace And Justice And Strong Institutions
    // 'Partnership For The Goals',
    const labels = [
        'No Poverty',
        'Zero Hunger',
        'Good Health And Well-Being',
        'Quality Education',
        'Gender Equality',
        'Clean Water And Sanitation',
        'Affordable And Clean Energy',
        'Decent Work And Economic Growth',
        'Industry Innovation And Infrastructure',
        'Reduced Inequalities',
        'Sustainable Cities And Communities',
        'Responsible Consumption And Production',
        'Climate Action',
        'Life Below Water',
        'Life On Land',
        'Peace And Justice And Strong Institutions',
        'Partnership For The Goals',
    ];
    const [selected, setSelected] = useState([]);

    const handleClick = (label) => {
        setSelected([...selected, label]);
        if (selected.includes(label)) {
            setSelected(selected.filter((item) => item !== label));
        }
        setCategories([...categories, label]) // ADDED THIS HERE
        if (categories.includes(label)) {
            setCategories(categories.filter((item) => item !== label));
        }
    };

    return (
        <div className='m-4 md:m-12'>
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
