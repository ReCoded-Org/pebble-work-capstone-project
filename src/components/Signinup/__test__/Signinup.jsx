import Image from "next/image";
import React from "react";

import Button from "@/components/Button";

const Signinup = ({ title }) => {
    return (
        <>
            <div className='flex items-center justify-center gap-6 '>
                <div className='mx-4 flex flex-col items-center justify-center text-center'>
                    <Image
                        src='/images/hero-image.png'
                        alt='hero image'
                        width={400}
                        height={500}
                        className='z-0'
                    />
                </div>
                <div className='mx-4 flex flex-col justify-center text-center'>
                    <h2 className='flex-end  flex'>{title}Sign in </h2>
                    <div>
                        <button className='m-1 w-80 rounded border border-blue-500 bg-transparent py-1 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'>
                            Countinue with Twitter
                        </button>
                        <br></br>
                        <button className='m-1 w-80 rounded border border-blue-500 bg-transparent py-1 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'>
                            Countinue with Google
                        </button>
                    </div>

                    <div>
                        <div className='w-full max-w-xs'>
                            <form className='mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md'>
                                <div className='mb-4'>
                                    <label
                                        className='mb-2 block text-sm font-bold text-gray-700'
                                        htmlFor='username'
                                    >
                                        Username
                                    </label>
                                    <input
                                        className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                                        id='username'
                                        type='text'
                                        placeholder='Username'
                                    />
                                </div>
                                <div className='mb-6'>
                                    <label
                                        className='mb-2 block text-sm font-bold text-gray-700'
                                        htmlFor='password'
                                    >
                                        Password
                                    </label>
                                    <input
                                        className='focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                                        id='password'
                                        type='password'
                                        placeholder='******************'
                                    />
                                    <p className='text-xs italic text-red-500'>
                                        Please choose a password.
                                    </p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <Button
                                        label='Sign in'
                                        bgColor='bg-primary-200'
                                    />
                                    <button
                                        className='focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none'
                                        type='button'
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                            <p className='text-center text-xs text-gray-500'>
                                &copy;2020 Acme Corp. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signinup;
