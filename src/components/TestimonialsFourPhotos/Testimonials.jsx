import Image from "next/image";
import { useTranslation } from "next-i18next";
import React from "react";

export default function Testimonials() {
    const { t } = useTranslation("common");
    return (
        <>
            <h2 className='hidden justify-center text-3xl font-medium md:mb-5 md:mt-10 md:flex'>
                {t("landingPage.testimonials.title")}
            </h2>
            <div className='mx-4 my-20 flex flex-col items-center md:mx-5 md:mt-0 md:flex-row md:gap-10 lg:mx-32'>
                <h2 className='mb-5 text-3xl font-medium md:hidden'>
                    {t("landingPage.testimonials.title")}
                </h2>
                <div className=' my-4 flex flex-col items-center'>
                    <Image
                        src='/images/testimonial-1.png'
                        width={100}
                        height={100}
                        alt='1st testimonial giver'
                    />
                    <h3 className='my-3 text-xl font-medium lg:text-2xl xl:text-2xl'>
                        {t("landingPage.testimonials.personOne")}
                    </h3>
                    <p className='text-center text-gray-500 lg:text-lg xl:text-xl'>
                        &quot;{t("landingPage.testimonials.personOneQuote")}
                        &quot;
                    </p>
                </div>
                <div className=' my-4 flex flex-col items-center'>
                    <Image
                        src='/images/testimonial-2.png'
                        width={100}
                        height={100}
                        alt='2nd testimonial giver'
                    />
                    <h3 className='my-3 text-xl font-medium lg:text-2xl xl:text-2xl'>
                        {t("landingPage.testimonials.personTwo")}
                    </h3>
                    <p className='text-center text-gray-500 lg:text-lg xl:text-xl'>
                        &quot;{t("landingPage.testimonials.personTwoQuote")}
                        &quot;
                    </p>
                </div>
                <div className=' my-4 flex flex-col items-center'>
                    <Image
                        src='/images/testimonial-3.png'
                        width={100}
                        height={100}
                        alt='3rd testimonial giver'
                    />
                    <h3 className='my-3 text-xl font-medium lg:text-2xl xl:text-2xl'>
                        {t("landingPage.testimonials.personThree")}
                    </h3>
                    <p className='text-center text-gray-500 lg:text-lg xl:text-xl'>
                        &quot;{t("landingPage.testimonials.personThreeQuote")}
                        &quot;
                    </p>
                </div>
            </div>
        </>
    );
}
