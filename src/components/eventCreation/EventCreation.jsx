import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";

import axios from "@/api/axios";

import EditInterests from "../EditInterests";
import InputComponent from "../InputComponent";

const EventCreation = () => {
    const { t } = useTranslation("common");
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
    // const [coverImage, setCoverImage] = useState("");
    const [address, setAddress] = useState("");
    const [eventId, setEventId] = useState("");
    const [valueState, setValueState] = useState("");
    const [dateInput, setDateInput] = useState();
    const [timeInput, setTimeInput] = useState();

    const router = useRouter();

    async function submitEvent() {
        var bodyFormData = new FormData();
        bodyFormData.append("title", title);
        bodyFormData.append("content", content);
        bodyFormData.append("coverImage", valueState);
        bodyFormData.append("date", `${dateInput}T${timeInput}:00.000Z`);
        //bodyFormData.append('categories[]', categories)
        for (const a of categories) {
            bodyFormData.append("categories[]", a);
        }
        bodyFormData.append("address[city]", searchTerm);
        bodyFormData.append("address[country]", "Turkey");
        bodyFormData.append("address[addressLine]", address);
        bodyFormData.append("location[lat]", 41.01);
        bodyFormData.append("location[log]", 28.97);
        //         formData.append("movie[screenshots][]", file1)
        // formData.append("movie[screenshots][]", file2)
        // for (let i = 0; i < categories.length; i++) {
        //     bodyFormData.append("categories[]", categories[i])
        // }
        //console.log(categories);
        try {
            const response = await axios({
                method: "post",
                url: "/api/event/",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            //const data = await response.json()
            // console.log(response);
            router.push(response.data._id);
        } catch (err) {
            //console.log(err);
        }
    }

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleFileUpload(e) {
        const file = Array.from(e.target.files)[0];
        setValueState(file);
        // console.log(file);
    }

    function handleContent(e) {
        setContent(e.target.value);
    }

    // function handleCoverImage(e) {
    //     setCoverImage(e.target.value)
    // }

    function handleAddress(e) {
        setAddress(e.target.value);
    }
    function handleDate(e) {
        setDateInput(e.target.value);
    }
    function handleTime(e) {
        setTimeInput(e.target.value);
    }

    return (
        <>
            <div className='mb-4 mt-3 flex flex-col items-center justify-center  py-3 text-3xl  font-semibold '>
                <h1>{t("eventCreation.header.title")}</h1>
            </div>
            <div className='mx-8 mt-3 mb-4 divide-y'>
                <div className='mb-4 flex flex-col  items-center gap-10 py-3 md:flex-row md:justify-around'>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='py-1 text-xl font-medium text-black'>
                            {t("eventCreation.header.subtitle")}
                        </h2>
                        <p className='my-1 text-gray-500'>
                            {t("eventCreation.header.description")}
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
                                <div className='absolute z-50 my-px flex w-full origin-top-right cursor-pointer  flex-col divide-y rounded bg-white shadow'>
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
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='py-1 text-xl font-medium text-black'>
                            {t("eventCreation.header.dateSubtitle")}
                        </h2>
                        <p className='my-1 text-gray-500'>
                            {t("eventCreation.header.dateDescription")}
                        </p>
                        <div>
                            <div className='relative w-full py-5'>
                                <InputComponent
                                    type='date'
                                    id='searchBox'
                                    value={dateInput}
                                    callback={handleDate}
                                    className='focus:ring-blacksm:mb-0 block w-full rounded-md border-black pl-8  text-base   focus:border-black focus:outline-none focus:ring-0 sm:w-full  lg:w-full'
                                    required
                                />
                            </div>
                            <InputComponent
                                type='time'
                                value={timeInput}
                                callback={handleTime}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col pt-3 '>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            {t("eventCreation.eventType.title")}
                        </h2>
                        <p className='mt-1 pr-20  text-gray-500 '>
                            {t("eventCreation.eventType.description")}
                        </p>
                    </div>
                    <div className='md:flex md:justify-between'>
                        <EditInterests
                            categories={categories}
                            setCategories={setCategories}
                            beforeClick='text-primary-200  border-primary-200'
                        />
                    </div>
                </div>
                <div className='mb-4 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            {t("eventCreation.eventInfo.eventTitle")}
                        </h2>
                        <p className='my-1 pr-20 text-gray-500 md:w-full'>
                            {t("eventCreation.eventInfo.titleDesc")}
                        </p>
                        <div className=' py-5 md:w-96 '>
                            <InputComponent
                                value={title}
                                callback={handleTitle}
                                placeholder='Enter your event title here'
                                className='w-full rounded border   border-black px-3 py-2 shadow  focus:border-black   focus:outline-none focus:ring-0 focus:ring-black'
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-4 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            {t("eventCreation.eventInfo.eventDesc")}
                        </h2>
                        <p className='my-1 w-full pr-20 text-gray-500'>
                            {t("eventCreation.eventInfo.descriptionDesc")}
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
                            {t("eventCreation.eventInfo.eventImg")}
                        </h2>
                        <p className='my-1 w-full text-gray-500'>
                            {t("eventCreation.eventInfo.imgDesc")}
                        </p>
                        <div className='relative py-5 md:w-full md:pr-0 '>
                            <input
                                type='file'
                                onChange={handleFileUpload}
                                accept='image/x-png,image/gif,image/jpeg'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-3 flex   flex-col gap-10 py-3 md:flex-row md:justify-between'>
                    <div>
                        <h2 className='py-1 text-xl  font-medium text-black'>
                            {t("eventCreation.guidelines.title")}
                        </h2>
                        <p className='my-2 w-full text-gray-500'>
                            {t("eventCreation.guidelines.description")}
                        </p>
                        <ul className=' my-1 w-full list-disc pl-5 text-black'>
                            <li>{t("eventCreation.guidelines.li1")}</li>
                            <li>{t("eventCreation.guidelines.li2")}</li>
                            <li>{t("eventCreation.guidelines.li3")}</li>
                        </ul>
                        <p className=' my-1 w-full pl-1 text-gray-400'>
                            {t("eventCreation.guidelines.community")}
                            <a
                                href='#'
                                className='p-1 text-blue-600 hover:text-primary-200'
                            >
                                {t("eventCreation.guidelines.communityLink")}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='mb-4 flex w-full flex-col items-center  justify-center gap-10 py-3 '>
                <Link href={`/${eventId}`}>
                    <button
                        onClick={submitEvent}
                        className='rounded border border-b-4 border-r-4 border-black py-4 px-4  hover:border-primary-200 hover:text-primary-200  md:w-96'
                    >
                        {t("eventCreation.guidelines.agree")}
                    </button>
                </Link>
            </div>
        </>
    );
};

export default EventCreation;
