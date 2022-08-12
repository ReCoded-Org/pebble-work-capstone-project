import Image from "next/image";
import React, { useState } from "react";

import EditInterests from "../EditInterests";
import InputComponent from "../InputComponent";

const EventCreation = () => {
    const citiesOfTurkey = [
        "Adana",
        "Adiyaman",
        "Afyon",
        "Agri",
        "Aksaray",
        "Amasya",
        "Ankara",
        "Antalya",
        "Ardahan",
        "Artvin",
        "Aydin",
        "Balikesir",
        "Bartin",
        "Batman",
        "Bayburt",
        "Bilecik",
        "Bingol",
        "Bitlis",
        "Bolu",
        "Burdur",
        "Bursa",
        "Canakkale",
        "Cankiri",
        "Corum",
        "Denizli",
        "Diyarbakir",
        "Duzce",
        "Edirne",
        "Elazig",
        "Erzincan",
        "Erzurum",
        "Eskisehir",
        "Gaziantep",
        "Giresun",
        "Gumushane",
        "Hakkari",
        "Hatay",
        "Igdir",
        "Isparta",
        "Istanbul",
        "Izmir",
        "Kahramanmaras",
        "Karabuk",
        "Karaman",
        "Kars",
        "Kastamonu",
        "Kayseri",
        "Kilis",
        "Kirikkale",
        "Kirklareli",
        "Kirsehir",
        "Kocaeli",
        "Konya",
        "Kutahya",
        "Malatya",
        "Manisa",
        "Mardin",
        "Mersin",
        "Mugla",
        "Mus",
        "Nevsehir",
        "Nigde",
        "Ordu",
        "Osmaniye",
        "Rize",
        "Sakarya",
        "Samsun",
        "Sanliurfa",
        "Siirt",
        "Sinop",
        "Sirnak",
        "Sivas",
        "Tekirdag",
        "Tokat",
        "Trabzon",
        "Tunceli",
        "Usak",
        "Van",
        "Yalova",
        "Yozgat",
        "Zonguldak",
    ];
    const [searchTerm, setSearchTerm] = useState("");
    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <>
            <div className='mb-4 mt-3 flex flex-col items-center justify-center  py-3 text-3xl  font-semibold '>
                <h1>Create an Event</h1>
            </div>
            <div className='mx-8 mt-3 mb-4 divide-y'>
                <div className='mb-4 flex flex-col  items-center gap-10 py-3 md:flex-row md:justify-around'>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='py-1 text-xl font-medium text-black'>
                            First, set your events’s location:
                        </h2>
                        <p className='my-1 text-gray-500'>
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
                                type='search'
                                id='searchBox'
                                placeholder='Seach Location'
                                value={searchTerm}
                                callback={handleSearch}
                                className='focus:ring-blacksm:mb-0 block w-full rounded-md border-black pl-8  text-base   focus:border-black focus:outline-none focus:ring-0 sm:w-full  lg:w-full'
                            />
                            <div className='absolute my-px flex w-full origin-top-right cursor-pointer flex-col  divide-y rounded   bg-white shadow'>
                                {citiesOfTurkey
                                    .filter((city) => {
                                        const searchCity =
                                            searchTerm.toLowerCase();
                                        const cityData = city.toLowerCase();
                                        return (
                                            searchCity &&
                                            cityData.includes(searchCity) &&
                                            searchCity !== cityData
                                        );
                                    })
                                    .slice(0, 5)
                                    .map((city, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                setSearchTerm(city);
                                            }}
                                            className=' cursor-pointer p-3 px-4 hover:bg-gray-50'
                                        >
                                            {city}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col pt-3 '>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Choose event type:
                        </h2>
                        <p className='mt-1 pr-20  text-gray-500 '>
                            Every pebble event should serve at least one of the
                            sustainable development goals of United Nations.
                            Which goal do you want to help in? Select all that
                            apply.
                        </p>
                    </div>
                    <div className='md:flex md:justify-between'>
                        <EditInterests beforeClick='text-primary-200  border-primary-200' />
                    </div>
                </div>
                <div className='mb-4 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Event title:
                        </h2>
                        <p className='my-1 pr-20 text-gray-500 md:w-full'>
                            Choose a title that will give people a clear idea of
                            what the event is about. Feel free to be creative!
                            You canedit this later if you change your mind.
                        </p>
                        <div className=' py-5 md:w-96 '>
                            <InputComponent
                                placeholder='Izmir Clean Energy Brainstorm meeting'
                                className='w-full rounded border   border-black px-3 py-2 shadow  focus:border-black   focus:outline-none focus:ring-0 focus:ring-black'
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-4 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Event Description:
                        </h2>
                        <p className='my-1 w-full pr-20 text-gray-500'>
                            Describe the purpose of your event. Who should join
                            and what will you do at the event?
                        </p>
                        <div className=' w-full py-3 pr-20'>
                            <textarea
                                style={{ resize: "none" }}
                                placeholder='Please write at least 50 characters'
                                className='h-40 w-full rounded border-black   px-3 py-2 shadow focus:border-black   focus:outline-none focus:ring-0 focus:ring-black'
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-4 flex flex-col gap-10 py-3 pr-20 md:w-full md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            Event Image:
                        </h2>
                        <p className='my-1 w-full text-gray-500'>
                            We have found that listings with a photo attract
                            more interest.
                        </p>
                        <div className='relative py-5 md:w-full md:pr-0 '>
                            <div className='w-25  absolute inset-y-0 left-0 flex items-center hover:border-primary-200  '>
                                <button className='ml-0 h-11 w-full cursor-pointer rounded border-2 border-b-4 border-r-4  border-black px-2 hover:border-primary-200 hover:text-primary-200 '>
                                    Browse
                                </button>
                            </div>
                            <InputComponent className='w-full  rounded border border-l-0 border-black pl-20 focus:border-black   focus:outline-none focus:ring-0 focus:ring-black' />
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
                <button className='rounded border border-b-4 border-r-4 border-black py-4 px-4  hover:border-primary-200 hover:text-primary-200  md:w-96'>
                    Agree with terms and create event!
                </button>
            </div>
        </>
    );
};

export default EventCreation;