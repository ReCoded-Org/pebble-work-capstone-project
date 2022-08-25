import Image from "next/image";
import Link from "next/link";
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
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [address, setAddress] = useState("");
    const [eventId, setEventId] = useState("");

    let token = "s%3Aenc%3A%3A2cbcbac6fb3bc47cc402f7219c3185fa551a5fcc996eb79f6bf2a28bae3dcdb212cca628f5a54729ca5aa904a9b02a9e093fa52a3c8a84c781018d491507f30619078a77ce682b16bd1e3587a2c6600c7376681a0ea5ea3fc16c04669ce56845353637323833129d4a711a6f86ef5470fb02cd41864803644b005d33cfc2b12a0f1dfd3c8d7c9e04024dfea6b10fa0161c198474f24209dff0044aec1a1977ebf1085492d1fa3aec9b76d75acf5cb1be6fa93cfdbf70bf5733c292114492297f7b7621d43aca254a287aeffa942fc4da1bc65220c276a3c18f11fbe4168ed9e9b576909f0fbd445d7cdd15ca1db7812fe55da4351639ada1426128402f1e9a28bc0bb20a8296224201d7dc70cb5e5c920c55114c1854846803868b6ccf3212b036851aa22a4853551f8d743544640fec97c18c65f42bb8a4f78a149bb4729d8c465ae02a3e3821e67efc8f56908e5ee6c3204b75689f7492053d.bP%2BIpVaiSDAMQddCFXbgPOFgRCcEKuBe%2FNPmWeAeN8E"

    async function submitEvent() {
        const response = await fetch("https://pebble-work.herokuapp.com/api/event",
        {
            method: "POST",
            body: JSON.stringify({
                title:{title},
                content:{content},
                coverImage:{coverImage},
                date: "2022-01-01",
                categories:{categories},
                address:{
                    city: {searchTerm},
                    country: "Turkey",
                    addressLine: {address}
                },
                location:{
                    lat: 41.01,
                    lon: 28.97
                },
                }),
            headers: {
                "Authorization": `Bearer ${token} `,
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data);
        setEventId(data._id)
    }

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }
    
    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleContent(e) {
        setContent(e.target.value)
    }

    function handleCoverImage(e) {
        setCoverImage(e.target.value)
    }

    function handleAddress(e) {
        setAddress(e.target.value)
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
                            First, set your event’s location:
                        </h2>
                        <p className='my-1 text-gray-500'>
                            Choose where you want to host your event.
                        </p>
                        <div>
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
                                    placeholder='Search Location'
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
                            <InputComponent
                                value={address}
                                callback={handleAddress}
                                placeholder='Enter your address'
                            />
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
                        <EditInterests categories={categories} setCategories={setCategories} beforeClick='text-primary-200  border-primary-200' />
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
                                value={title}
                                callback={handleTitle}
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
                                value={content}
                                onChange={handleContent}
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
                            <InputComponent value={coverImage} callback={handleCoverImage} className='w-full  rounded border border-l-0 border-black pl-20 focus:border-black   focus:outline-none focus:ring-0 focus:ring-black' />
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
                <Link href={`/${eventId}`}>
                <button onClick={submitEvent} className='rounded border border-b-4 border-r-4 border-black py-4 px-4  hover:border-primary-200 hover:text-primary-200  md:w-96'>
                    Agree with the terms and create event!
                </button>
                </Link>
            </div>
        </>
    );
};

export default EventCreation;
