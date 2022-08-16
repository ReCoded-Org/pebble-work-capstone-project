import { useTranslation } from "next-i18next";
import React from "react";

import Button from "../Button/Button";
const GetStarted = () => {
    const { t } = useTranslation("common");
    return (
        <div className='m-2  flex  flex-col justify-center gap-2 py-48'>
            <div className='mx-4 text-center'>
                <h1 className=' flex items-center justify-center text-4xl font-bold  lg:px-52'>
                    {t("landingPage.getStarted.title")}
                </h1>
                <p className='mt-5 md:px-24 lg:px-52'>
                    {t("landingPage.getStarted.description")}
                </p>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <Button
                    label={t("landingPage.getStarted.getStarted")}
                    textColor='text-white'
                    bgColor='bg-secondary-300'
                    borderColor='border-secondary-300'
                    height='h-10'
                />
                <button className='m-2 flex rounded p-2 hover:bg-primary-200 hover:text-white hover:shadow-xl'>
                    {t("landingPage.getStarted.whoAreWe")}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 5l7 7-7 7'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default GetStarted;
