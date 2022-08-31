import { format } from "date-fns";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useEffect } from "react";

import useAuth from "@/hooks/useAuth";

import EventCards from "@/components/EventCards";
import Layout from "@/components/layout/Layout";
import Pagination from "@/components/Pagination/Pagination";
import Quotes from "@/components/Qutoes";

// import axios from "@/api/axios";

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

const YourEvents = () => {
    const { t } = useTranslation("common");
    let today = new Date();
    let formattedToday = format(today, "yyyy-MM-dd");

    const { auth } = useAuth();
    console.log("auth", auth);

    //GETTING EVENTS THE USER WILL ATTEND
    const [futureEvents, setFutureEvents] = useState([]);
    useEffect(() => {
        let followedEvents = auth?.followedEvents;
        if (!followedEvents) return;
        const followedFutureEvents = followedEvents.filter((e) => {
            return e.date.split("T")[0] >= formattedToday;
        });
        setFutureEvents(followedFutureEvents);
    }, [auth]);
    //PAGINATION FOR EVENTS ATTENDED BY USER
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [currentPosts, setCurrentPosts] = useState([]);
    useEffect(() => {
        if (futureEvents.length <= 0) return;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        setCurrentPosts(futureEvents.slice(indexOfFirstPost, indexOfLastPost));
    }, [futureEvents, currentPage, postsPerPage]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //GETTING EVENTS THE USER CREATED
    const [createdEvents, setCreatedEvents] = useState([]);
    useEffect(() => {
        let createdEvents = auth?.createdEvents;
        console.log("createdEvents", createdEvents);
        if (!createdEvents) return;
        const createdFutureEvents = createdEvents.filter((e) => {
            return e.date.split("T")[0] >= formattedToday;
        });
        setCreatedEvents(createdFutureEvents);
    }, [auth, formattedToday]);

    //PAGINATION FOR EVENTS CREATED BY USER
    const [currentPageForCreated, setCurrentPageForCreated] = useState(1);
    const [postsPerPageForCreated] = useState(5);
    const [currentPostsForCreated, setCurrentPostsForCreated] = useState([]);
    const paginateForCreated = (pageNumber) =>
        setCurrentPageForCreated(pageNumber);

    useEffect(() => {
        if (createdEvents.length <= 0) return;
        const indexOfLastPostForCreated =
            currentPageForCreated * postsPerPageForCreated;
        const indexOfFirstPostForCreated =
            indexOfLastPostForCreated - postsPerPageForCreated;
        setCurrentPostsForCreated(
            createdEvents.slice(
                indexOfFirstPostForCreated,
                indexOfLastPostForCreated
            )
        );
    }, [createdEvents, currentPageForCreated, postsPerPageForCreated]);

    //JOIN-LEAVE EVENTS
    const [isJoined, setIsJoined] = useState({});
    function handleJoinClick(id) {
        setIsJoined((isJoined) => ({
            ...isJoined,
            [id]: !isJoined[id],
        }));
    }

    return (
        <Layout>
            <Quotes />
            {/* RENDERING UPCOMING EVENTS */}
            <div className='justify center my-6 flex flex-col items-center'>
                <h1 className='text-2xl font-bold'>
                    {t("yourEvents.yourUpcomingEvents")}
                </h1>
            </div>
            {/* <hr /> */}
            <div className='mx-4 sm:mx-44'>
                {futureEvents.length > 0 ? (
                    <div>
                        <div className='my-10'>
                            <EventCards
                                events={currentPosts}
                                isJoined={isJoined}
                                handleJoinClick={handleJoinClick}
                            />
                        </div>
                        <div className='mb-10'>
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={futureEvents.length}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                ) : (
                    <div className='mt-14 mb-20 flex flex-col items-center text-center text-xl sm:my-36 sm:text-2xl'>
                        <p>{t("yourEvents.notJoined")}</p>
                        <Link href='/events'>
                            <p className='text-secondary-300 underline hover:cursor-pointer'>
                                {t("yourEvents.exploreEvents")}
                            </p>
                        </Link>
                    </div>
                )}
            </div>
            {/* RENDERING EVENTS CREATED BY USER */}
            <hr />
            <div className='justify center my-6 flex flex-col items-center'>
                <h1 className='text-2xl font-bold'>
                    {t("yourEvents.eventsCreatedByYou")}
                </h1>
            </div>
            <div className='mx-4 sm:mx-44'>
                {createdEvents.length > 0 ? (
                    <div>
                        <div className='my-10'>
                            <EventCards
                                events={currentPostsForCreated}
                                isJoined={isJoined}
                                handleJoinClick={handleJoinClick}
                            />
                        </div>
                        <div className='mb-10'>
                            <Pagination
                                postsPerPage={postsPerPageForCreated}
                                totalPosts={createdEvents.length}
                                paginate={paginateForCreated}
                            />
                        </div>
                    </div>
                ) : (
                    <div className='mt-14 mb-20 flex flex-col items-center text-center text-xl sm:my-36 sm:text-2xl'>
                        <p>{t("yourEvents.notCreated")}</p>
                        <Link href='/eventcreation'>
                            <p className='text-secondary-300 underline hover:cursor-pointer'>
                                {t("yourEvents.createEvents")}
                            </p>
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default YourEvents;
