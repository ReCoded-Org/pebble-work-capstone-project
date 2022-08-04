import Image from "next/image";
import React, { useState } from "react";

import Button from "../Button";
import InputComponent from "../InputComponent";

const EventCreation = () => {
    const [Location, setLocation] = useState("");
    return (
        <>
            <div className='mb-4 mt-3 flex flex-col items-center justify-center  py-3 text-3xl  font-semibold '>
                <h1>Create an Event</h1>
            </div>
            <div className='mx-8 mt-3 mb-4 divide-y'>
                <div className='mb-4 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl font-medium text-black'>
                            First, set your events’s location:
                        </h2>
                        <p className='my-1 w-full text-gray-500'>
                            Pebble events can be both local or online. Choose
                            where you want to host your event.
                        </p>
                        <div className='relative w-full py-5'>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                <Image
                                    src='/svg/search.svg'
                                    alt='search'
                                    height='18'
                                    width='18'
                                />
                            </div>
                            <InputComponent
                                placeholder='Search for a city'
                                className='w-full rounded border border-black px-9 py-2 shadow hover:border-primary-200 focus:outline-none'
                                callback={(event) => {
                                    {
                                        event.target.value.length === 0
                                            ? setLocation("")
                                            : setLocation(event.target.value);
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center  '>
                        <div className='my-10 flex items-center justify-center text-center  text-6xl font-bold text-primary-200 '>
                            {Location}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4  py-3 '>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Choose event type:
                        </h2>
                        <p className='my-1  text-gray-500 '>
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
                                borderColor='text-secondary-300 border-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            <Button
                                label='Zero Hunger'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                            <Button
                                label='Clean Water and Sanitation'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                            <Button
                                label='Gender Equality'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                        </div>
                        <div className='md:flex md:flex-col'>
                            <Button
                                label='Industry, Innovation, and Infrastructure'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52'
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />

                            <Button
                                label='Reduced Inequalities'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                            <Button
                                label='Climate Action'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                            <Button
                                label='Life Below Water'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white'
                            />
                        </div>
                        <div className='md:flex md:flex-col'>
                            <Button
                                label='Life on Land'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            <Button
                                label='Quality Educationg'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white hover:border-primary-200 hover:border-primary-200'
                            />
                            <Button
                                label='Sustainable Cities and Communities'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            <Button
                                label='Good Health and 
                            Well-being  '
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                        </div>{" "}
                        <div className='md:flex md:flex-col'>
                            <Button
                                label='Decent Work and Economic Growth'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />{" "}
                            <Button
                                label='Responsible Consumption/Production'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                            <Button
                                label='Peace, Justice and Strong Institutions'
                                borderColor='border-secondary-300 text-secondary-300 w-full rounded-full hover:border-primary-200 md:w-52
                                '
                                hoverBgColor='bg-primary-200 border hover:text-white '
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Event title:
                        </h2>
                        <p className='my-1 text-gray-500 md:w-full'>
                            Choose a title that will give people a clear idea of
                            what the event is about. Feel free to be creative!
                            You canedit this later if you change your mind.
                        </p>
                        <div className=' w-full py-5 '>
                            <InputComponent
                                placeholder='Izmir Clean Energy Brainstorm meeting'
                                className='w-full rounded border  border-black px-3 py-2 shadow hover:border-primary-200 focus:outline-none'
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-4 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Event Description:
                        </h2>
                        <p className='my-1 w-full text-gray-500'>
                            Describe the purpose of your event. Who should join
                            and what will you do at the event?
                        </p>
                        <div className=' w-full  py-3'>
                            <textarea
                                style={{ resize: "none" }}
                                placeholder='Please write at least 50 characters'
                                className=' h-40 w-full rounded border  border-black px-3 py-2 shadow focus:outline-none'
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-4 flex flex-col gap-10 py-3 md:w-full md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Event Image:
                        </h2>
                        <p className='my-1 w-full text-gray-500'>
                            We have found that listings with a photo attract
                            more interest.
                        </p>
                        <div className='relative py-5  md:w-full'>
                            <div className='w-25  absolute inset-y-0 left-0 flex items-center hover:border-primary-200  hover:text-white'>
                                <button className='h-8 w-full cursor-pointer rounded border-2 border-b-4 border-r-4  border-black px-1 hover:border-primary-200 hover:bg-primary-200 '>
                                    Browse
                                </button>
                            </div>
                            <input className=' h-8 w-full rounded  border border-black py-3 pl-20 focus:outline-none '></input>
                        </div>
                    </div>
                </div>
                <div className='mb-3 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Almost Done! Just take a minute to review our
                            guidlines.
                        </h2>
                        <p className='my-2 w-full text-gray-500'>
                            Pebble is all about helping people with the help of
                            volunteers like you. This means that all events
                            should:
                        </p>
                        <ul className=' my-1 w-full list-disc pl-5 text-black'>
                            <li>
                                Be transparent about the event’s intentions.
                            </li>
                            <li>
                                Encourage real human interactions in person or
                                online
                            </li>
                            <li> Have the host present in all events</li>
                        </ul>
                        <p className=' my-1 w-full pl-1 text-gray-400'>
                            You can read more about all of this in our
                            <a
                                href='#'
                                className='p-1 text-blue-600 hover:text-primary-200'
                            >
                                Community guidlines
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='mb-4 flex w-full flex-col items-center  justify-center gap-10 py-3 '>
                <button className='rounded border border-b-4 border-r-4 border-black py-4 px-4 hover:border-primary-200 hover:bg-primary-200 hover:text-white md:w-96'>
                    Agree with terms and create event!
                </button>
            </div>
        </>
    );
};

export default EventCreation;
