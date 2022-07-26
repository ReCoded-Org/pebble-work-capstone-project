import React from "react";

import Button from "../components/Button";
const Getstarted = () => {
    return (
        <div className='m-2 flex flex-col justify-center gap-10'>
            <div className='mx-4 text-center'>
                <h1 className=' text-3xl font-bold'>
                    Become the change you wish to see in the world.
                </h1>
                <p className='mt-5'>
                    Body placeholder for text paragraph. A paragraph is a
                    self-contained unit of text dealing with a particular point
                    or idea.
                </p>
            </div>
            <div className='flex flex-row justify-center'>
                <Button
                    label='Get started'
                    textColor='text-white'
                    bgColor='bg-secondary-300'
                    borderColor='border-secondary-300'
                />
                <button className='m-2 flex rounded border-b p-2 hover:bg-primary-200 hover:text-white hover:shadow-xl'>
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
    );
};

export default Getstarted;
