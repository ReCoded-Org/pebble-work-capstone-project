import React from "react";

import Button from "../components/button/Button";
const Getstarted = () => {
    return (
        <div className='flex h-screen  flex-col items-center justify-center'>
            <div
                style={{ width: 500 }}
                className='flex  flex-col items-center  p-1 text-center'
            >
                <p className='text-center text-3xl  font-medium '>
                    Become the change you wish to see in the world.
                </p>
            </div>
            <div
                style={{ width: 600 }}
                className='flex flex-col  items-center  justify-center p-1'
            >
                <p className='text-center text-gray-600 '>
                    Body placeholder for text paragraph. A paragraph is a
                    self-contained unit of text dealing with a particular point
                    or idea.
                </p>
            </div>
            <div className='flex flex-row'>
                <Button
                    label='Get started'
                    textColor='text-white'
                    bgColor='bg-secondary-300'
                    borderColor='border-secondary-300'
                    onClick={(e) => console.log("clicked")}
                />
                <div className='flex flex-row items-center '>
                    <button className='m-1 flex rounded border-b p-2 hover:bg-primary-200 hover:text-white hover:shadow-xl'>
                        Who are we?
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
        </div>
    );
};

export default Getstarted;
