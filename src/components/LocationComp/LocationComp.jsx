import { useTranslation } from "next-i18next";

import Button from "../Button";
import InputComponent from "../InputComponent";
const LocationComp = ({
    style,
    searchTerm = "",
    handleSearch,
    onSearch,
    setSearchTerm,
}) => {
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
    return (
        <div className={`sm:block ${style}`}>
            <div className='sm:relative sm:w-full sm:border-none sm:bg-transparent sm:shadow-none'>
                <div className='flex flex-col items-center md:flex-row '>
                    <h1 className='mb-2 text-center text-xl font-bold sm:hidden'>
                        {t("eventsPage.locationComp.searchEventLocation")}
                    </h1>
                    <InputComponent
                        type='text'
                        id='cities'
                        placeholder={t(
                            "eventsPage.locationComp.searchLocation"
                        )}
                        value={searchTerm}
                        callback={handleSearch}
                        className='mb-2 h-9 w-3/4 rounded-md border-gray-200 text-base placeholder-black focus:border-secondary-300 sm:mb-0 sm:w-full'
                    />
                </div>
                <div className='mt-2 flex flex-col items-center'>
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
                    <Button
                        onClick={() => onSearch(searchTerm)}
                        label={t("eventsPage.locationComp.search")}
                        customStyle='rounded-md border-2 mb-0 py-0 px-0 bg-white text-black shadow-sm w-48'
                    />
                </div>
            </div>
        </div>
    );
};
export default LocationComp;
