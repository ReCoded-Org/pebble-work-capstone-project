import Link from "next/link";
import React from "react";

import Button from "@/components/Button";

import Google from "../../../public/svg/Google.svg";
import Line from "../../../public/svg/Line.svg";
import SignupinMan from "../../../public/svg/SignupinMan.svg";
import Twitter from "../../../public/svg/Twitter.svg";

const Signup = ({ title }) => {
    return (
        <>
            <div className='m-4 flex flex-col items-center justify-center gap-12  md:flex-row'>
                <div className=' h-100 flex w-96 flex-col items-center justify-center text-center'>
                    <SignupinMan className='h-96 w-96' />
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
                            <Button
                                label={title}
                                bgColor='bg-primary-200 '
                                width='w-80 md:w-auto   '
                            />
                        </div>
                        <div className='flex flex-row items-center justify-center py-1'>
                            <div>
                                <Line
                                    style={{ width: 188 }}
                                    className='px-1 '
                                />
                            </div>
                            <div className='text-sm text-gray-400'>OR</div>
                            <div>
                                <Line style={{ width: 188 }} className='px-1' />
                            </div>
                        </div>
                        <div className='flex justify-center py-1'>
                            <button className=' flex w-96 flex-row items-center justify-center rounded border-2 border-b-4  border-black bg-transparent py-1 font-normal text-black hover:border-primary-200 hover:text-primary-200'>
                                <Google style={{ width: "30", height: "30" }} />
                                Countinue with Google
                            </button>
                        </div>
                        <div className='flex justify-center py-1'>
                            <button className='flex w-96 flex-row items-center justify-center rounded border-2 border-b-4  border-black bg-transparent py-1 font-normal text-black hover:border-primary-200 hover:text-primary-200'>
                                <Twitter
                                    className='px-1'
                                    style={{ width: "30", height: "30" }}
                                />
                                Countinue with Twitter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
