import { useTranslation } from "next-i18next";
import { useState } from "react";

import Button from "@/components/Button";

import axios from "@/api/axios";
// ADDED PROPS: CATEGORIES AND SETCATEGORIES
const EditInterests = ({
    beforeClick,
    afterClick,
    setCategories,
    categories,
    button = "", // sometimes the submitinterest button needs to be hidden. Leave this value empty if you don't want it hidden.
}) => {
    const { t } = useTranslation("common");
    const labels = [
        "No Poverty",
        "Zero Hunger",
        "Good Health and Wellbeing",
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
        "Partnership for the Goals"
    ];
    const [selected, setSelected] = useState([]);

    const handleClick = (label) => {
        setSelected([...selected, label]);
        if (selected.includes(label)) {
            setSelected(selected.filter((item) => item !== label));
        }
        setCategories([...categories, label]); // ADDED THIS HERE
        if (categories.includes(label)) {
            setCategories(categories.filter((item) => item !== label));
        }
    };

    async function submitinterests() {
        var bodyFormData = new FormData();
        for (const a of selected) {
            bodyFormData.append("interests[]", a);
        }
        try {
            const response = await axios({
                method: "put",
                url: "/api/user/",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            //const data = await response.json()
            console.log(response);
            // router.push(response.data._id);
        } catch (err) {
            //console.log(err);
        }
    }
    return (
        <div className='m-4 md:m-8 '>
            <div className='flex flex-wrap items-center justify-center overflow-hidden lg:ml-8 lg:mr-8 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center'>
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
            <div className='flex justify-end pr-8  '>
                <Button
                    label={t("editProfilePage.changeInterest")}
                    bgColor='bg-primary-200'
                    textColor='text-white'
                    fontWeight='font-medium'
                    width='w-40 md:w-40 lg:w-52'
                    height='h-8 md:h-12 lg:h-12'
                    borderColor=''
                    fontSize='text-[11px] md:text-xl lg:text-xl'
                    border=''
                    customStyle={`flex items-center justify-center ${button}`}
                    onClick={submitinterests}
                />
            </div>
        </div>
    );
};

export default EditInterests;
