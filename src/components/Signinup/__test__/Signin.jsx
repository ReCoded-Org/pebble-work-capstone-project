import Image from "next/image";
import Link from "next/link";
import React from "react";

import Button from "@/components/Button";

const Signinup = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
                <div className='mx-4 flex w-80 flex-col items-center justify-center text-center'>
                    <Image
                        src='/images/hero-image.png'
                        alt='hero image'
                        width={400}
                        height={500}
                        className='z-0'
                    />
                </div>
                <div className='mx-4 flex flex-col justify-center text-center'>
                    <h2 className='px-1 md:flex'>Sign in</h2>
                    <div className='w-full '>
                        <form className='mb-1 rounded bg-white  pt-4 '>
                            <div className='mb-4'>
                                <input
                                    className='focus:shadow-outline w-80 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                                    id='username'
                                    type='text'
                                    placeholder='Username'
                                />
                            </div>
                            <div className='mb-1'>
                                <input
                                    className='focus:shadow-outline mb-3 w-80 appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                                    id='password'
                                    type='password'
                                    placeholder='******************'
                                />
                                <p className='hidden text-xs italic text-red-500'>
                                    Please choose a password.
                                </p>
                                <p className='text-grey-100 flex pl-3 text-xs italic'>
                                    Dont have an account?
                                    <Link href='/signin'>
                                        <div className='cursor-pointer border-b border-primary-200 pl-1 text-primary-200'>
                                            Sign in
                                        </div>
                                    </Link>
                                </p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <Button
                                    label='Sign in'
                                    bgColor='bg-primary-200'
                                    width='w-80'
                                    className=''
                                />
                            </div>
                        </form>
                    </div>
                    <div>- or -</div>
                    <div>
                        <button className='mx-1 flex w-80 flex-row items-center justify-center rounded border-2 border-b-4  border-black bg-transparent py-1 px-4 font-normal text-black hover:border-transparent hover:border-primary-200 hover:text-primary-200'>
                            <svg
                                width='30'
                                height='30'
                                viewBox='0 0 41 36'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M30.7877 18.2326C30.7877 17.3693 30.7162 16.7393 30.5615 16.0859H20.502V19.9826H26.4067C26.2877 20.9509 25.6448 22.4093 24.2162 23.3892L24.1962 23.5197L27.3768 25.9344L27.5972 25.9559C29.6209 24.1242 30.7877 21.4292 30.7877 18.2326Z'
                                    fill='#4285F4'
                                />
                                <path
                                    d='M20.5001 28.4996C23.3929 28.4996 25.8215 27.5662 27.5953 25.9562L24.2144 23.3895C23.3096 24.0078 22.0953 24.4395 20.5001 24.4395C17.6668 24.4395 15.2621 22.6079 14.4049 20.0762L14.2792 20.0866L10.972 22.595L10.9287 22.7128C12.6906 26.1428 16.3096 28.4996 20.5001 28.4996Z'
                                    fill='#34A853'
                                />
                                <path
                                    d='M14.4061 20.0775C14.1799 19.4241 14.049 18.7241 14.049 18.0008C14.049 17.2774 14.1799 16.5774 14.3942 15.9241L14.3882 15.785L11.0395 13.2363L10.9299 13.2874C10.2038 14.7108 9.78711 16.3091 9.78711 18.0008C9.78711 19.6924 10.2038 21.2907 10.9299 22.7141L14.4061 20.0775Z'
                                    fill='#FBBC05'
                                />
                                <path
                                    d='M20.5002 11.56C22.5121 11.56 23.8692 12.4116 24.643 13.1233L27.6668 10.23C25.8097 8.53834 23.393 7.5 20.5002 7.5C16.3097 7.5 12.6906 9.85665 10.9287 13.2866L14.393 15.9233C15.2621 13.3917 17.6669 11.56 20.5002 11.56Z'
                                    fill='#EB4335'
                                />
                            </svg>
                            Countinue with Google
                        </button>

                        <button className='border-1  m-1 flex w-80 flex-row items-center justify-center rounded border-2 border-b-4   border-black bg-transparent py-1 px-4 font-normal text-black hover:border-transparent hover:border-primary-200 hover:text-primary-200'>
                            <svg
                                width='30'
                                height='30'
                                viewBox='0 0 44 39'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='p-1'
                            >
                                <path
                                    d='M15.9433 33.8139C11.5684 33.8139 7.4902 32.6988 4.05762 30.7747C6.97199 30.9399 12.1152 30.5442 15.3143 27.87C10.5018 27.6765 8.3315 24.4418 8.04841 23.0595C8.45731 23.1978 10.4075 23.3636 11.5083 22.9766C5.97245 21.7602 5.1232 17.5026 5.31192 16.2032C6.3499 16.8391 8.11132 17.0603 8.8033 17.005C3.64486 13.7704 5.50064 8.90462 6.41281 7.85406C10.1147 12.3487 15.6627 14.873 22.5262 15.0134C22.3968 14.516 22.3285 13.9981 22.3285 13.4663C22.3285 9.64911 25.8491 6.55469 30.192 6.55469C32.4611 6.55469 34.5057 7.39943 35.9409 8.75064C37.4572 8.43926 39.7392 7.71032 40.8548 7.07997C40.2925 8.84933 38.5419 10.3253 37.4829 10.8724C37.4917 10.891 37.4743 10.8537 37.4829 10.8724C38.4131 10.7491 40.93 10.3252 41.9243 9.73401C41.4326 10.728 39.5765 12.3807 38.0534 13.306C38.3368 24.2591 28.7744 33.8139 15.9433 33.8139Z'
                                    fill='#47ACDF'
                                />
                            </svg>
                            Countinue with Twitter
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signinup;
