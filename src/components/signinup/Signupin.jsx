import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Signupin = ({ title }) => {
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            {domLoaded && (
                <div className='m-4 flex flex-col items-center justify-center gap-12  md:flex-row'>
                    <div className=' h-100 flex w-96 flex-col items-center justify-center text-center'>
                        <Image
                            src='/svg/signupinMan.svg'
                            alt='logo'
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className='flex w-96 flex-col justify-center py-1 text-center'>
                        <h1 className='py-3 text-3xl font-semibold md:flex'>
                            {title}
                        </h1>
                        <div>
                            {title === "Sign up" && (
                                <div className=' flex flex-row justify-between py-1'>
                                    <div>
                                        <input
                                            style={{ width: "190px" }}
                                            className='focus:shadow-outline w-25 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                                            id='name'
                                            type='text'
                                            placeholder='Name'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            style={{ width: "190px" }}
                                            className='focus:shadow-outline w-25 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                                            id='surname'
                                            type='text'
                                            placeholder='Surname'
                                        />
                                    </div>
                                </div>
                            )}
                            <div className='py-1'>
                                <input
                                    className='focus:shadow-outline w-96 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                                    id='email'
                                    type='text'
                                    placeholder='Email adress'
                                />
                            </div>
                            <div className='py-1'>
                                <input
                                    className='focus:shadow-outline w-96 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                                    id='password'
                                    type='password'
                                    placeholder='Password'
                                />
                            </div>
                            <p className='hidden text-xs italic text-red-500'>
                                Please choose a password.
                            </p>
                            {title === "Sign up" ? (
                                <p className='signin m-1 flex text-xs italic text-gray-700'>
                                    Already have an account?
                                    <Link href='/signin'>
                                        <div className='cursor-pointer border-b border-primary-200 pl-1 text-primary-200'>
                                            {title === "Sign up"
                                                ? "Sign in"
                                                : "/Sign up"}
                                        </div>
                                    </Link>
                                </p>
                            ) : (
                                <p className='signin m-1 flex text-xs italic text-gray-700'>
                                    You dont have an account?
                                    <Link href='/signup'>
                                        <div className='cursor-pointer border-b border-primary-200 pl-1 text-primary-200'>
                                            {title === "Sign up"
                                                ? "Sign in"
                                                : "Sign up"}
                                        </div>
                                    </Link>
                                </p>
                            )}
                            <div className=' py-1'>
                                <button className='w-80 rounded bg-primary-200 px-2 py-1 md:w-auto '>
                                    {title}
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
                            <div className='flex justify-center py-1'>
                                <button className=' flex w-96 flex-row items-center justify-center rounded border-2 border-b-4  border-black bg-transparent py-1 font-normal text-black hover:border-primary-200 hover:text-primary-200'>
                                    <Image
                                        className='px-1'
                                        src='/svg/google.svg'
                                        alt='google'
                                        height={30}
                                        width={30}
                                    />
                                    Countinue with Google
                                </button>
                            </div>
                            <div className='flex justify-center py-1'>
                                <button className='flex w-96 flex-row items-center justify-center rounded border-2 border-b-4  border-black bg-transparent py-1 font-normal text-black hover:border-primary-200 hover:text-primary-200'>
                                    <Image
                                        style={{ paddingRight: "3px" }}
                                        src='/svg/twitter.svg'
                                        alt='twitter'
                                        height={28}
                                        width={28}
                                    />
                                    Countinue with Twitter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Signupin;
