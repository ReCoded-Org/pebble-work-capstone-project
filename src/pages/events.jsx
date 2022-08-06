import { useEffect, useRef, useState } from "react";

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
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refIntBtn = useRef(null);
    const refLocBtn = useRef(null);
    const refDateBtn = useRef(null);
    useEffect(() => {
        function interestClickedOutside(e) {
            if (refOne.current && !refOne.current.contains(e.target)) {
                if (refIntBtn.current.contains(e.target)) {
                    setIsInterestButtonClicked(true);
                } else {
                    setIsInterestButtonClicked(false);
                }
            }
        }
        function locationClickedOutside(e) {
            if (refTwo.current && !refTwo.current.contains(e.target)) {
                if (refLocBtn.current.contains(e.target)) {
                    setIsLocationButtonClicked(true);
                } else {
                    setIsLocationButtonClicked(false);
                }
            }
        }
        function dateClickedOutside(e) {
            if (refThree.current && !refThree.current.contains(e.target)) {
                if (refDateBtn.current.contains(e.target)) {
                    setIsDateButtonClicked(true);
                } else {
                    setIsDateButtonClicked(false);
                }
            }
        }
        document.addEventListener("click", interestClickedOutside, true);
        document.addEventListener("click", locationClickedOutside, true);
        document.addEventListener("click", dateClickedOutside, true);
        return () => {
            document.removeEventListener("click", interestClickedOutside, true);
            document.removeEventListener("click", locationClickedOutside, true);
            document.removeEventListener("click", dateClickedOutside, true);
        };
    });

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
                    <div className='mx-7 grid grid-cols-3 justify-between gap-2 sm:mx-5 sm:block'>
                        <div ref={refDateBtn}>
                            <Button
                                label='Change Date'
                                onClick={handleDateButtonClick}
                                width='w-full'
                                height='h-full'
                                customStyle='m-0 sm:mb-2'
                                bgColor='bg-white'
                                textColor='text-black'
                                borderColor='border rounded-lg shadow-sm hover:border-black sm:hidden'
                            />
                        </div>
                        <div className='hidden sm:block '>
                            <CalendarComp />
                            <hr className='mb-4 mt-2' />
                        </div>
                        <div ref={refLocBtn}>
                            <Button
                                label='Change Location'
                                onClick={handleLocationButtonClick}
                                width='w-full'
                                bgColor='bg-white'
                                textColor='text-black'
                                height='h-full'
                                customStyle='m-0 sm:mb-2'
                                borderColor='border rounded-lg shadow-sm sm:hidden hover:border-black '
                            />
                        </div>
                        <div className='hidden sm:block'>
                            <LocationComp />
                            <hr className='my-4 mb-4 hidden sm:block' />
                        </div>
                        <div ref={refIntBtn}>
                            <Button
                                label='Pick Your Interests'
                                onClick={handleInterestButtonClick}
                                width='w-full'
                                bgColor='bg-white'
                                textColor='text-black'
                                height='h-full'
                                customStyle='m-0 sm:mb-2'
                                borderColor='border rounded-lg shadow-sm hover:border-black '
                            />
                        </div>
                    </div>
                    {isInterestButtonClicked ? (
                        <div ref={refOne}>
                            <CategoryCheckboxes />
                        </div>
                    ) : null}
                    {isLocationButtonClicked ? (
                        <div ref={refTwo}>
                            <hr className='my-4 mx-3 text-black sm:hidden' />
                            <LocationComp style='sm:hidden' />
                        </div>
                    ) : null}
                    {isDateButtonClicked ? (
                        <div ref={refThree}>
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
