import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
const Signupin = ({ title }) => {
    const { t } = useTranslation("common");
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            {domLoaded && (
                <form className='signInUp m-5 flex h-full flex-col  items-center  justify-around   lg:flex-row'>
                    <div className='h-100 flex w-96 flex-col items-center justify-center text-center 2xl:scale-150 '>
                        <Image
                            src='/svg/signupinMan.svg'
                            alt='logo'
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className='flex w-96 flex-col items-center justify-center py-1 text-center lg:items-start  2xl:scale-150'>
                        <h1 className='py-3 text-3xl font-semibold md:flex'>
                            {title === "Sign in"
                                ? t("common.nav.signIn")
                                : t("common.nav.signUp")}
                        </h1>
                        <div className='w-80'>
                            {title === "Sign up" && (
                                <div className=' flex flex-row justify-between py-1'>
                                    <div className='w-80'>
                                        <input
                                            className='focus:shadow-outline mx-px  w-40 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                            id='name'
                                            type='text'
                                            placeholder={t("signInUpPage.name")}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className='focus:shadow-outline  w-40 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                            id='surname'
                                            type='text'
                                            placeholder={t(
                                                "signInUpPage.surname"
                                            )}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className='ml-px w-80'>
                                <input
                                    className='focus:shadow-outline w-80 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                    id='email'
                                    type='email'
                                    placeholder={t("signInUpPage.mail")}
                                />
                            </div>
                            <div className='ml-px py-1'>
                                <input
                                    className='focus:shadow-outline w-80 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                    id='password'
                                    type='password'
                                    placeholder={t("signInUpPage.password")}
                                />
                            </div>
                            <p className='hidden text-xs italic text-red-500'>
                                Please choose a password.
                            </p>
                            {title === "Sign up" ? (
                                <p className='signin m-1 flex text-xs italic text-gray-700'>
                                    {t("signInUpPage.haveAccount")}&nbsp;
                                    <Link href='/signin'>
                                        <div className='cursor-pointer border-b border-primary-200  text-primary-200'>
                                            {t("common.nav.signIn")}
                                        </div>
                                    </Link>
                                </p>
                            ) : (
                                <p className='signin m-1 flex text-xs italic text-gray-700'>
                                    {t("signInUpPage.dontHaveAccount")}&nbsp;
                                    <Link href='/signup'>
                                        <div className='cursor-pointer border-b border-primary-200 text-primary-200'>
                                            {t("common.nav.signUp")}
                                        </div>
                                    </Link>
                                </p>
                            )}
                            <div className=' py-1'>
                                <button className='w-80 rounded bg-primary-200 px-2 py-1 md:w-auto '>
                                    {title === "Sign up"
                                        ? t("common.nav.signUp")
                                        : t("common.nav.signIn")}
                                </button>
                            </div>
                            <div className='flex flex-row items-center justify-center py-1'>
                                <Image
                                    src='/svg/line.svg'
                                    alt='line'
                                    width={190}
                                    height={2}
                                />
                                <div className='text-sm text-gray-400'>OR</div>
                                <Image
                                    src='/svg/line.svg'
                                    alt='line'
                                    width={190}
                                    height={2}
                                />
                            </div>
                            <div className=' flex justify-center py-1'>
                                <button className='google flex w-96 flex-row items-center justify-center rounded border-2 border-b-4  border-black bg-transparent py-1 font-normal text-black hover:border-primary-200 hover:text-primary-200'>
                                    <Image
                                        className='px-1'
                                        src='/svg/google.svg'
                                        alt='google'
                                        height={30}
                                        width={30}
                                    />
                                    {t("signInUpPage.google")}
                                </button>
                            </div>
                            <div className='flex justify-center py-1'>
                                <button className=' flex w-96 flex-row items-center justify-center rounded border-2 border-b-4  border-black bg-transparent py-1 font-normal text-black hover:border-primary-200 hover:text-primary-200'>
                                    <Image
                                        style={{ paddingRight: "3px" }}
                                        src='/svg/twitter.svg'
                                        alt='twitter'
                                        height={28}
                                        width={28}
                                    />
                                    {t("signInUpPage.twitter")}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default Signupin;
