import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import useAuth from "@/hooks/useAuth";

import Button from "@/components/Button";

import axios from "@/api/axios";

import InputComponent from "../InputComponent";

const NameLocation = () => {
    const { t } = useTranslation("common");
    const { auth, setAuth } = useAuth();
    const [fileUpload, setFileUpload] = useState();
    const [toUpload, setToUpload] = useState(false);
    const [firstName, setFirstName] = useState();
    const refIntBtn = useRef(null);
    const refOne = useRef(null);
    const [isInterestButtonClicked, setIsInterestButtonClicked] =
        useState(false);
    const [selectedCities, setSelectedCities] = useState([]);

    const fileRef = useRef();
    const router = useRouter();
    //City SELECTION
    const cities = [
        "All",
        "Adana",
        "Kocaeli",
        "Adiyaman",
        "Konya",
        "Afyonkarahisar",
        "Kutahya",
        "Agri",
        "Malatya",
        "Amasya",
        "Manisa",
        "Ankara",
        "Kahramanmaras",
        "Antalya",
        "Mardin",
        "Artviin",
        "Mugla",
        "Aydin",
        "Mus",
        "Balikesir",
        "Nevsehir",
        "Bilecik",
        "Nigde",
        "Bingol",
        "Ordu",
        "Bitlis",
        "Rize",
        "Bolu",
        "Sakarya",
        "Burdur",
        "Samsun",
        "Bursa",
        "Siirt",
        "Canakkale",
        "Sinop",
        "Cankiri",
        "Sivas",
        "Corum",
        "Tekirdag",
        "Denizli",
        "Tokat",
        "Diyarbakir",
        "Trabzon",
        "Edirne",
        "Tunceli",
        "Elazig",
        "Sanliurfa",
        "Erzincan",
        "Usak",
        "Erzurum",
        "Van",
        "Eskisehir",
        "Yozgat",
        "Gaziantep",
        "Zonguldak",
        "Giresun",
        "Aksaray",
        "Gumushane",
        "Bayburt",
        "Hakkari",
        "Karaman",
        "Hatay",
        "Kirikkale",
        "Isparta",
        "Batman",
        "Mersin",
        "Sirnak",
        "Istanbul",
        "Bartin",
        "Izmir",
        "Ardahan",
        "Kars",
        "Igdir",
        "Kastamonu",
        "Yalova",
        "Kayseri",
        "Karabuk",
        "Kirklareli",
        "Kilis",
        "Kirsehir",
        "Osmaniye",
        "Duzce",
    ];
    let checkedBoxes = [];
    function handleChange(e) {
        let value = e.target.value;
        if (value === "All") {
            if (e.target.checked === false) {
                checkedBoxes = [];
                cities.map((city) => {
                    const id = cities.indexOf(city);
                    document.getElementById(id).checked = false;
                });
                setSelectedCities([]);
            } else {
                checkedBoxes = [];
                cities.map((city) => {
                    const id = cities.indexOf(city);
                    document.getElementById(id).checked = true;
                    if (city !== "All") {
                        checkedBoxes.push(city);
                        setSelectedCities(checkedBoxes);
                    }
                });
            }
        } else if (e.target.checked) {
            // checkedBoxes.push(value);
            setSelectedCities([...selectedCities, value]);
        } else {
            document.getElementById(
                cities[0].indexOf(cities[0])
            ).checked = false;
            const index = selectedCities.indexOf(value);
            const newSelectedCities = [...selectedCities];
            newSelectedCities.splice(index, 1);
            setSelectedCities(newSelectedCities);
        }
    }

    async function submit() {
        var bodyFormData = new FormData();
        bodyFormData.append("firstName", firstName);
        // bodyFormData.append("preferredCities[]", preferredCities); //This work when l only enter one city
        for (const a of selectedCities) {
            bodyFormData.append("preferredCities[]", a);
        }
        try {
            const response = await axios({
                method: "put",
                url: "/api/user/",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            //const data = await response.json()
            console.log(response);
            // router.push(response.data._id);
        } catch (err) {
            //console.log(err);
        }
    }
    const handleName = (e) => {
        setFirstName(e.target.value);
    };

    let profileImage = auth?.profileImage;
    if (!auth?.profileImage) {
        profileImage = "/images/user.png";
    }

    // handlePhoto handles the things to change when a photo is selected
    function handlePhoto(e) {
        const file = Array.from(e.target.files)[0];
        setFileUpload(file);
        setToUpload(true);
    }
    // submitPhoto handles what should happen when upload is clicked
    const submitPhoto = async () => {
        var photoData = new FormData();
        photoData.append("profileImage", fileUpload);
        try {
            const response = await axios({
                method: "put",
                url: "/api/user/",
                data: photoData,
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            fileRef.current.value = "";
            setFileUpload();
            profileImage = response.data.profileImage;
            console.log("response", response);
            const authData = { ...auth };
            authData.profileImage = profileImage;
            setAuth(authData);
            toast.success("Photo submitted!");
            //router.reload(window.location.pathname)
        } catch (err) {
            console.log("error", err);
        }
    };

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
        document.addEventListener("click", interestClickedOutside, true);
        return () => {
            document.removeEventListener("click", interestClickedOutside, true);
        };
    });
    function handleInterestButtonClick() {
        setIsInterestButtonClicked(!isInterestButtonClicked);
    }
    return (
        <div className='m-4 mt-4 md:m-12 lg:ml-16'>
            <h1 className='m-4 text-xl font-medium md:m-6 md:text-3xl lg:m-12 lg:text-5xl'>
                {t("editProfilePage.header")}
            </h1>
            <div className='flex flex-row items-center justify-center overflow-hidden lg:ml-8 lg:justify-start'>
                <div className='m-1 mr-2 w-20 overflow-hidden rounded-full md:mr-6 md:w-40 lg:w-44'>
                    <Image
                        src={profileImage}
                        alt='name-location'
                        width='100%'
                        height='100%'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='m-1 flex flex-col md:m-2'>
                    <input
                        ref={fileRef}
                        type='file'
                        onChange={handlePhoto}
                        accept='image/x-png,image/gif,image/jpeg'
                    />
                    {toUpload && (
                        <Button
                            label={t("editProfilePage.upload")}
                            bgColor='bg-primary-200'
                            textColor='text-white'
                            onClick={submitPhoto}
                        />
                    )}
                    {/* <Button
                        type="file"
                        label='Upload New'
                        bgColor='bg-primary-200'
                        textColor='text-white'
                        fontWeight='font-medium'
                        width='w-20 md:w-44 lg:w-48'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor=''
                        fontSize='text-[11px] md:text-xl lg:text-xl'
                        border=''
                        onClick={submitPhoto}
                    /> */}
                </div>
                {/* <div className='m-1 md:m-2'>
                    <Button
                        label='Choose From Library'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-60 lg:w-64'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[11px] md:text-xl lg:text-xl'
                        border='border border-b-2 border-r-2'
                    />
                </div> */}
            </div>
            <div className='m-4 mt-8 md:m-8 md:mt-12'>
                <label className='text-[12px] font-medium md:text-xl lg:text-xl'>
                    {t("editProfilePage.name")}
                </label>
                <div className='mt-1 mb-3 h-8 md:mt-2 md:mb-9 md:h-14 md:w-[490px] lg:h-12  lg:w-[600px]'>
                    <input
                        type='text'
                        name='Name'
                        placeholder={t("editProfilePage.namePH")}
                        required
                        className='h-full w-full rounded-md border-2 border-black p-2'
                        onChange={handleName}
                    />
                </div>
                <label className='text-[12px] font-medium md:text-xl lg:text-xl'>
                    {t("editProfilePage.location")}
                </label>
                <div className='mt-1 mb-3 h-8 md:mt-2 md:mb-9 md:h-14 md:w-[490px] lg:h-12 lg:w-[600px]'>
                    <div className='mt-1 mb-3 h-8 md:mt-2 md:mb-9 md:h-14 md:w-[490px] lg:h-12 lg:w-[600px]'>
                        <input
                            ref={refIntBtn}
                            type='text'
                            name='Location'
                            placeholder={t("editProfilePage.locationPH")}
                            required
                            className='h-full w-full rounded-md border-2 border-black p-2'
                            onClick={handleInterestButtonClick}
                            value={selectedCities}
                        />
                        {isInterestButtonClicked ? (
                            <div ref={refOne}>
                                <div className='relative w-full'>
                                    <div className='fixed left-0 right-0 bottom-0 z-10 h-4/5 overflow-y-scroll rounded-t-xl border border-black bg-white text-2xl shadow-lg scrollbar-thin scrollbar-thumb-secondary-300 sm:relative sm:h-56 sm:w-full sm:rounded sm:border-none sm:text-base'>
                                        <div className='m-4 flex flex-col'>
                                            <h1 className='text-center font-bold sm:hidden'>
                                                {t(
                                                    "eventsPage.categoryCheckboxes.chooseCategory"
                                                )}
                                            </h1>
                                            <form>
                                                {cities.map((city) => {
                                                    return (
                                                        <div
                                                            key={cities.indexOf}
                                                        >
                                                            <InputComponent
                                                                type='checkbox'
                                                                id={cities.indexOf(
                                                                    city
                                                                )}
                                                                label={city}
                                                                value={city}
                                                                className='mb-2 mr-2 h-6 w-6 rounded text-secondary-300 text-black'
                                                                callback={
                                                                    handleChange
                                                                }
                                                            />

                                                            <br />
                                                        </div>
                                                    );
                                                })}
                                            </form>
                                            <div className='my-5 sm:hidden'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className='flex justify-end pr-8'>
                <Button
                    label={t("editProfilePage.submitBtn")}
                    bgColor='bg-primary-200'
                    textColor='text-white'
                    fontWeight='font-medium'
                    width='w-20 md:w-32 lg:w-36'
                    height='h-8 md:h-12 lg:h-12'
                    borderColor=''
                    fontSize='text-[11px] md:text-xl lg:text-xl'
                    border=''
                    onClick={submit}
                />
            </div>
        </div>
    );
};

export default NameLocation;
