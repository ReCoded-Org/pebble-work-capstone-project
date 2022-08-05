import { useState } from "react";

import Button from "@/components/Button";
import CalendarComp from "@/components/CalendarComp";
import CategoryCheckboxes from "@/components/CategoryCheckboxes";
import EventCards from "@/components/EventCards";
import Layout from "@/components/layout/Layout";
import LocationComp from "@/components/LocationComp";

const EventsPage = () => {
    const [isInterestButtonClicked, setIsInterestButtonClicked] =
        useState(false);
    const [isDateButtonClicked, setIsDateButtonClicked] = useState(false);
    const [isLocationButtonClicked, setIsLocationButtonClicked] =
        useState(false);
    function handleInterestButtonClick() {
        setIsInterestButtonClicked(!isInterestButtonClicked);
    }
    function handleDateButtonClick() {
        setIsDateButtonClicked(!isDateButtonClicked);
    }
    function handleLocationButtonClick() {
        setIsLocationButtonClicked(!isLocationButtonClicked);
    }
    return (
        <Layout>
            <div className='flex justify-center text-center sm:mx-12 sm:grid sm:grid-cols-3  sm:text-start'>
                <div className='col-start-2 mx-4 mt-6'>
                    <h1 className='text-xl font-bold sm:text-3xl'>
                        Welcome, Dilara!
                    </h1>
                    <p className='mt-2 text-xs sm:text-base'>
                        Explore and Join Events
                    </p>
                </div>
            </div>
            <div className='my-4 sm:mx-6 sm:grid sm:grid-cols-3 md:mx-6 lg:mx-12'>
                <div>
                    <div className='mx-5 grid grid-cols-3 justify-between gap-2 sm:mx-5 sm:block'>
                        <Button
                            label='Change Date'
                            onClick={handleDateButtonClick}
                            width='w-full'
                            customStyle='m-0 sm:mb-2'
                            borderColor='border rounded-lg shadow-sm hover:border-black sm:hidden'
                        />
                        <div className='hidden sm:block '>
                            <CalendarComp />
                            <hr className='mb-4 mt-2' />
                        </div>
                        <Button
                            label='Change Location'
                            onClick={handleLocationButtonClick}
                            width='w-full'
                            customStyle='m-0 sm:mb-2'
                            borderColor='border rounded-lg shadow-sm sm:hidden hover:border-black '
                        />
                        <div className='hidden sm:block'>
                            <LocationComp />
                            <hr className='my-2 mb-4 hidden sm:block' />
                        </div>
                        <Button
                            label='Pick Your Interests'
                            onClick={handleInterestButtonClick}
                            width='w-full'
                            customStyle='m-0 sm:mb-2'
                            borderColor='border rounded-lg shadow-sm hover:border-black '
                        />
                    </div>
                    {isInterestButtonClicked ? (
                        <div>
                            <CategoryCheckboxes />
                        </div>
                    ) : null}
                    {isLocationButtonClicked ? (
                        <div>
                            <hr className='my-4 mx-3 text-black sm:hidden' />
                            <LocationComp style='sm:hidden' />
                        </div>
                    ) : null}
                    {isDateButtonClicked ? (
                        <div>
                            <CalendarComp style='sm:hidden' />
                        </div>
                    ) : null}
                </div>
                <hr className='my-4 mx-3 text-black sm:hidden' />

                <div className='mx-4 sm:col-span-2 sm:mx-0'>
                    <EventCards />
                </div>
            </div>
        </Layout>
    );
};

export default EventsPage;
