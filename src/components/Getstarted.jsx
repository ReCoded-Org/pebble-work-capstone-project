import React from "react";

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
                {/* <Button
                    label='Get started'
                    textColor='text-white'
                    bgColor='bg-secondary-300'
                    borderColor='border-secondary-300'
                /> */}
                <div className='flex flex-row items-center '>
                    <a
                        href='#_'
                        className='group relative inline-block text-lg'
                    >
                        <span className='border-1 relative z-10 block overflow-hidden rounded-lg border-secondary-300  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-primary-200'>
                            <span className='absolute inset-0 h-full w-full rounded-lg bg-secondary-300  px-5 py-3'></span>
                            <span className='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180'></span>
                            <span className='relative text-white'>
                                Get started
                            </span>
                        </span>
                        <span
                            className='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
                            data-rounded='rounded-lg'
                        ></span>
                    </a>
                    <a
                        href='#_'
                        className='group relative m-2 inline-flex items-center justify-start overflow-hidden rounded bg-gray-50 py-3 pl-4 pr-12 font-semibold text-secondary-300 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6'
                    >
                        <span className='absolute bottom-0 left-0 h-1 w-full bg-black transition-all duration-150 ease-in-out group-hover:h-full'></span>
                        <span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
                            <svg
                                className='h-5 w-5 text-primary-200'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                                ></path>
                            </svg>
                        </span>
                        <span className='absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0'>
                            <svg
                                className='h-5 w-5 text-primary-200'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                                ></path>
                            </svg>
                        </span>
                        <span className='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white'>
                            Who are we?
                        </span>
                    </a>
                    {/* <button className='m-2 flex rounded border-b p-2 hover:bg-primary-200 hover:text-white hover:shadow-xl'>
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
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Getstarted;
