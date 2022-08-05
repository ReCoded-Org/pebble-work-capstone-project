import { useState } from "react";

import Button from "../Button";
import InputComponent from "../InputComponent";
const LocationComp = ({ style }) => {
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
    function onSearch(e) {
        //api to fetch the results
        setSearchTerm(e);
    }
    return (
        <div className={`sm:block ${style}`}>
            <div className='     sm:relative sm:w-full sm:border-none sm:bg-transparent sm:shadow-none'>
                <div className='flex flex-col items-center md:flex-row '>
                    <h1 className='mb-2 text-center text-xl font-bold sm:hidden'>
                        Search Event Location
                    </h1>
                    <InputComponent
                        type='text'
                        id='cities'
                        placeholder='Seach Event Location'
                        value={searchTerm}
                        callback={handleSearch}
                        className='w-3/4 rounded-md  text-base shadow-sm focus:border-secondary-300 sm:w-full'
                    />
                    <Button
                        onClick={() => onSearch(searchTerm)}
                        label='SEARCH'
                        customStyle='text-base bg-primary-200 border text-white'
                    />
                </div>
                <div>
                    {citiesOfTurkey
                        .filter((city) => {
                            const searchCity = searchTerm.toLowerCase();
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
                                className='py-1 text-center text-xl sm:ml-4 sm:py-0 sm:text-start sm:text-base'
                            >
                                {city}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
export default LocationComp;
