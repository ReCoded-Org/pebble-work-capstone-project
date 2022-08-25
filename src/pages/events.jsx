import { addDays } from "date-fns";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useRef, useState } from "react";

import useAuth from "@/hooks/useAuth";

import Button from "@/components/Button";
import CalendarComp from "@/components/CalendarComp";
import CategoryCheckboxes from "@/components/CategoryCheckboxes";
import EventCards from "@/components/EventCards";
import Layout from "@/components/layout/Layout";
import LocationComp from "@/components/LocationComp";

export async function getServerSideProps({ locale, query }) {
    let categoryParams = "";
    //If no categories are selected
    if (query.categories === undefined) {
        categoryParams = "";
    }
    //If more than one category is selected
    else if (Array.isArray(query.categories)) {
        categoryParams =
            "?" + "categories=" + query.categories.join("&categories=");
    }
    //If only one category is selected and it is not an array
    else {
        categoryParams = `?categories[]=${query.categories}`;
    }

    let cityParams = "";
    if (Object(query.city).length > 0) {
        cityParams = "?" + "city=" + query.city;
    }

    let dateParams = "";
    if (Object(query.fromDate).length > 0 && Object(query.toDate).length > 0) {
        dateParams =
            "?" + "fromDate=" + query.fromDate + "&toDate=" + query.toDate;
    }

    const events = await fetch(
        `https://pebble-work.herokuapp.com/api/event/${categoryParams}${cityParams}${dateParams}`
    ).then((r) => r.json());
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            events,
        },
    };
}

const EventsPage = ({ events }) => {
    const { t } = useTranslation("common");
    const { auth } = useAuth();
    const router = useRouter();
    // CATEGORY SELECTION
    const categories = [
        {
            name: "All",
            label: t("eventsPage.categoryCheckboxes.all"),
        },
        {
            name: "No Poverty",
            label: t("eventsPage.categoryCheckboxes.noPoverty"),
        },
        {
            name: "Zero Hunger",
            label: t("eventsPage.categoryCheckboxes.zeroHunger"),
        },
        {
            name: "Good Health And Well-Being",
            label: t("eventsPage.categoryCheckboxes.goodHealthAndWellbeing"),
        },
        {
            name: "Quality Education",
            label: t("eventsPage.categoryCheckboxes.qualityEducation"),
        },
        {
            name: "Gender Equality",
            label: t("eventsPage.categoryCheckboxes.genderEquality"),
        },
        {
            name: "Clean Water And Sanitation",
            label: t("eventsPage.categoryCheckboxes.cleanWaterAndSanitation"),
        },
        {
            name: "Affordable And Clean Energy",
            label: t("eventsPage.categoryCheckboxes.affordableAndCleanEnergy"),
        },
        {
            name: "Decent Work And Economic Growth",
            label: t(
                "eventsPage.categoryCheckboxes.decentWorkAndEconomicGrowth"
            ),
        },
        {
            name: "Industry Innovation And Infrastructure",
            label: t(
                "eventsPage.categoryCheckboxes.industryInnovationAndInfrastructure"
            ),
        },
        {
            name: "Reduced Inequalities",
            label: t("eventsPage.categoryCheckboxes.reducedInequalities"),
        },
        {
            name: "Responsible Consumption And Production",
            label: t(
                "eventsPage.categoryCheckboxes.responsibleConsumptionAndProduction"
            ),
        },
        {
            name: "Sustainable Cities And Communities",
            label: t(
                "eventsPage.categoryCheckboxes.sustainableCitiesAndCommunities"
            ),
        },
        {
            name: "Climate Action",
            label: t("eventsPage.categoryCheckboxes.climateAction"),
        },
        {
            name: "Life Below Water",
            label: t("eventsPage.categoryCheckboxes.lifeBelowWater"),
        },
        {
            name: "Life On Land",
            label: t("eventsPage.categoryCheckboxes.lifeOnLand"),
        },
        {
            name: "Peace And Justice And Strong Institutions",
            label: t(
                "eventsPage.categoryCheckboxes.peaceJusticeAndStrongInstitutions"
            ),
        },
        {
            name: "Partnership For The Goals",
            label: t("eventsPage.categoryCheckboxes.partnershipForTheGoals"),
        },
    ];

    let checkedBoxes = [];
    function handleChange(e) {
        let value = e.target.value;
        if (value === "All") {
            if (document.getElementById("All").checked === false) {
                checkedBoxes = [];
                categories.map((category) => {
                    document.getElementById(category.name).checked = false;
                });
            } else {
                checkedBoxes = [];
                categories.map((category) => {
                    document.getElementById(category.name).checked = true;
                    if (category.name !== "All") {
                        checkedBoxes.push(category.name);
                    }
                });
            }
        } else if (e.target.checked) {
            checkedBoxes.push(value);
        } else {
            checkedBoxes.splice(checkedBoxes.indexOf(value), 1);
            document.getElementById("All").checked = false;
        }
    }
    // CATEGORY FILTERING
    let categoryFilterURL = "";
    function handleApplyFilters() {
        //construct URL to render events based on category filters
        if (checkedBoxes.length > 0) {
            categoryFilterURL =
                "?" + "categories=" + checkedBoxes.join("&categories=");
            router.push(`${router.pathname}${categoryFilterURL}`);
        }
    }
    // LOCATION FILTERING
    const [searchTerm, setSearchTerm] = useState("");
    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }
    let cityFilterURL = "";
    function onSearch(selectedCity) {
        //construct URL to render events based on city filters
        setSearchTerm(selectedCity);
        cityFilterURL = "?" + "city=" + selectedCity;
        router.push(`${router.pathname}${cityFilterURL}`);
    }
    // DATE FILTERING
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: "selection",
        },
    ]);

    let dateFilterURL = "";
    function handleDateSubmit() {
        //construct URL to render events based on date filters - for Mobile
        let fromDate = format(range[0].startDate, "yyyy-MM-dd");
        let toDate = format(range[0].endDate, "yyyy-MM-dd");
        dateFilterURL = "?" + "fromDate=" + fromDate + "&toDate=" + toDate;
        router.push(`${router.pathname}${dateFilterURL}`);
    }

    function handleDateSubmitDesktop() {
        //construct URL to render events based on date filters - for Desktop
        let fromDate = format(range[0].startDate, "yyyy-MM-dd");
        let toDate = format(range[0].endDate, "yyyy-MM-dd");
        dateFilterURL = "?" + "fromDate=" + fromDate + "&toDate=" + toDate;
        router.push(`${router.pathname}${dateFilterURL}`);
    }
    // MOBILE FILTER BUTTONS CLICK & UNMOUNTING BY OUTSIDE CLICK
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

    // JOIN / LEAVE AN EVENT
    const [isJoined, setIsJoined] = useState({});
    function handleJoinClick(id) {
        setIsJoined((isJoined) => ({
            ...isJoined,
            [id]: !isJoined[id],
        }));
        // API Call to join event
    }

    return (
        <Layout>
            <div className='flex justify-center text-center sm:mx-12 sm:grid sm:grid-cols-3  sm:text-start'>
                <div className='col-start-2 mx-4 mt-6'>
                    <h1 className='text-xl font-bold sm:text-3xl'>
                        {t("eventsPage.welcome")}{auth?.firstName ? `, ${auth.firstName}!` : "!"}
                    </h1>
                    <p className='mt-2 text-xs sm:text-base'>
                        {t("eventsPage.description")}
                    </p>
                </div>
            </div>
            <div className='my-4 sm:mx-6 sm:grid sm:grid-cols-3 md:mx-6 lg:mx-12'>
                <div>
                    <div className='mx-7 grid grid-cols-3 justify-between gap-2 sm:mx-5 sm:block'>
                        <div ref={refDateBtn}>
                            <Button
                                label={t("eventsPage.calendarComp.changeDate")}
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
                            <CalendarComp
                                range={range}
                                setRange={setRange}
                                handleDateSubmit={() =>
                                    handleDateSubmitDesktop()
                                }
                            />
                            <hr className='mb-4 mt-2' />
                        </div>
                        <div ref={refLocBtn}>
                            <Button
                                label={t(
                                    "eventsPage.locationComp.changeLocation"
                                )}
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
                            <LocationComp
                                searchTerm={searchTerm}
                                handleSearch={handleSearch}
                                onSearch={onSearch}
                                setSearchTerm={setSearchTerm}
                            />
                            <hr className='my-4 mb-4 hidden sm:block' />
                        </div>
                        <div ref={refIntBtn}>
                            <Button
                                label={t(
                                    "eventsPage.categoryCheckboxes.pickYourInterests"
                                )}
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
                            <CategoryCheckboxes
                                categories={categories}
                                handleChange={handleChange}
                                handleApplyFilters={handleApplyFilters}
                            />
                        </div>
                    ) : null}
                    {isLocationButtonClicked ? (
                        <div ref={refTwo}>
                            <hr className='my-4 mx-3 text-black sm:hidden' />
                            <LocationComp
                                style='sm:hidden'
                                searchTerm={searchTerm}
                                handleSearch={handleSearch}
                                onSearch={onSearch}
                                setSearchTerm={setSearchTerm}
                            />
                        </div>
                    ) : null}
                    {isDateButtonClicked ? (
                        <div ref={refThree}>
                            <CalendarComp
                                style='sm:hidden'
                                range={range}
                                setRange={setRange}
                                handleDateSubmit={() => handleDateSubmit()}
                            />
                        </div>
                    ) : null}
                </div>
                <hr className='my-4 mx-3 text-black sm:hidden' />

                <div className='mx-4 sm:col-span-2 sm:mx-0'>
                    <EventCards
                        events={events}
                        isJoined={isJoined}
                        handleJoinClick={handleJoinClick}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default EventsPage;
