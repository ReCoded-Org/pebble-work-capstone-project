import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HowItWorks() {
    const { t } = useTranslation("common");
    return (
        <div className='how-it-works'>
            <h1 className='mt-5 flex justify-center text-xl font-bold md:m-3 md:text-4xl lg:mb-9 lg:text-4xl'>
                {t("landingPage.howItWorks.title")}
            </h1>
            <div className='flex flex-col items-center justify-center lg:flex-row'>
                <div className='w-30 m-4 overflow-hidden rounded pb-6 md:m-4 md:w-4/5 md:pb-0 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/register.png'
                        alt='Register'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='m-2 flex justify-center text-center font-bold md:text-3xl lg:text-lg'>
                            {t("landingPage.howItWorks.register")}
                        </div>
                        <p className='text-center text-sm text-gray-700 md:text-xl lg:text-lg'>
                            {t("landingPage.howItWorks.registerDescription")}
                        </p>
                    </div>
                    <div className='mb-4 p-2 px-6 pt-4'>
                        <h1 className='title text-center font-bold md:text-2xl lg:text-lg'>
                            {" "}
                            <Link href='/posts/first-post'>
                                <a>
                                    {t("landingPage.howItWorks.signUp")}{" "}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </Link>
                        </h1>
                    </div>
                </div>
                <div className='w-30 m-4 overflow-hidden rounded pb-6 md:m-4 md:w-4/5 md:pb-0 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/attend.png'
                        alt='Attend'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='m-2 flex justify-center text-center font-bold md:text-3xl lg:text-lg'>
                            {t("landingPage.howItWorks.attendEvents")}
                        </div>
                        <p className='text-center text-sm text-gray-700 md:text-xl lg:text-lg'>
                            {t(
                                "landingPage.howItWorks.attendEventsDescription"
                            )}
                        </p>
                    </div>
                    <div className='mb-4 p-2 px-6 pt-4'>
                        <h1 className='title text-center font-bold md:text-2xl lg:text-lg'>
                            {" "}
                            <Link href='/posts/first-post'>
                                <a>
                                    {t("landingPage.howItWorks.exploreEvents")}{" "}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </Link>
                        </h1>
                    </div>
                </div>
                <div className='w-30 m-4 overflow-hidden rounded pb-6 md:m-4 md:w-4/5 md:pb-0 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/organize.png'
                        alt='Organize'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='m-2 flex justify-center text-center font-bold md:text-3xl lg:text-lg'>
                            {t("landingPage.howItWorks.organizeYourOwn")}
                        </div>
                        <p className='text-center text-sm text-gray-700 md:text-xl lg:text-lg'>
                            {t(
                                "landingPage.howItWorks.organizeYourOwnDescription"
                            )}
                        </p>
                    </div>
                    <div className='mb-4 p-2 px-6 pt-4'>
                        <h1 className='title text-center font-bold md:text-2xl lg:text-lg'>
                            {" "}
                            <Link href='/posts/first-post'>
                                <a>
                                    {t("landingPage.howItWorks.createEvents")}{" "}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HowItWorks;
