import React, { useState } from "react";

import Button from "../Button";
import InputComponent from "../InputComponent";

const ChooseLocationAndEventType = () => {
    const [Location, setLocation] = useState("Which city?");
    return (
        <>
            <div className='mx-8'>
                <div className='flex flex-col   gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h1 className='text-3xl font-bold text-secondary-300'>
                            First, set your events’s location:
                        </h1>
                        <p className='my-1 w-full text-gray-500'>
                            Pebble events can be both local or online. Choose
                            where you want to host your event.
                        </p>
                        <div className='relative w-full py-5'>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                <svg
                                    aria-hidden='true'
                                    className='h-5 w-5 text-gray-500 dark:text-gray-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                            </div>
                            <InputComponent
                                placeholder='Search for a city'
                                className='w-full rounded border border-primary-200 px-9 py-1 shadow focus:outline-none'
                                callback={(event) => {
                                    {
                                        event.target.value.length === 0
                                            ? setLocation("Which city?")
                                            : setLocation(event.target.value);
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center rounded-full bg-sky-100'>
                        <div className='my-10 flex items-center justify-center  text-6xl font-bold text-primary-200 '>
                            {Location}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  gap-4  py-3 '>
                    <div>
                        <h1 className='text-3xl font-bold text-secondary-300'>
                            Second, Choose event type:
                        </h1>
                        <p className='my-1  w-full text-gray-500 '>
                            Every pebble event should serve at least one of the
                            sustainable development goals of United Nations.
                            Which goal do you want to help in? Select all that
                            apply.
                        </p>
                    </div>
                    <div className='md:flex md:justify-between'>
                        <div className='md:flex md:flex-col'>
                            <Button
                                label='No Poverty'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            <Button
                                label='Zero Hunger'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                            <Button
                                label='Clean Water and Sanitation'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                            <Button
                                label='Gender Equality'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                        </div>
                        <div className='md:flex md:flex-col'>
                            <Button
                                label='Industry, Innovation, and Infrastructure'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />

                            <Button
                                label='Reduced Inequalities'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                            <Button
                                label='Climate Action'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                            <Button
                                label='Life Below Water'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                        </div>
                        <div className='md:flex md:flex-col'>
                            <Button
                                label='Life on Land'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            <Button
                                label='Quality Educationg'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white hover:border-primary-200 hover:border-primary-200'
                            />
                            <Button
                                label='Sustainable Cities and Communities'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            <Button
                                label='Good Health and 
                            Well-being  '
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                        </div>{" "}
                        <div className='md:flex md:flex-col'>
                            <Button
                                label='Decent Work and Economic Growth'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />{" "}
                            <Button
                                label='Responsible Consumption/Production'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            <Button
                                label='Peace, Justice and Strong Institutions'
                                borderColor='border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            {/* <Button
                                label='Affordable and 
                            Clean Energy'
                                borderColor='border-primary-200 w-full rounded-full md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseLocationAndEventType;
