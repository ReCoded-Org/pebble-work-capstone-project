import { format } from "date-fns";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

import EventCards from "@/components/EventCards";
import Layout from "@/components/layout/Layout";
import Pagination from "@/components/Pagination/Pagination";
import Quotes from "@/components/Qutoes";

import axios from "@/api/axios";

export async function getServerSideProps({ locale }) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

const YourEvents = () => {
    // RENDERING THE EVENTS: CREATED BY USER AND WILL BE ATTENDED BY USER
    const { t } = useTranslation("common");
    let today = new Date();
    let formattedToday = format(today, "yyyy-MM-dd");
    
    let futureEvents = []
    let createdFutureEvents = []

    const updateEvents = async () => {
        const user = await axios({
            method: "get",
            url:"/api/user/",
            withCredentials:true
        })
        // console.log(user);
        user.data.followedEvents.map((e) => {
            if (e.date.split("T")[0] >= formattedToday) {
                futureEvents.push(e);
            }
        })
        // console.log("FUTURE EVENTS", futureEvents);
        user.data.createdEvents.map((e) => {
            if (e.date.split("T")[0] >= formattedToday) {
                createdFutureEvents.push(e);
            }
        })
        // console.log(createdFutureEvents);
    }
    
    updateEvents();
    console.log("OUTSIDE FN: FUTURE EVENTS", futureEvents);

        // const { auth } = useAuth();
        // console.log("auth",auth)
        
        // let followedEvents =auth?.followedEvents;
        // let createdEvents =auth?.createdEvents;
    
        // //BRINGING EVENTS THE USER WILL ATTEND
        // const futureEvents = [];
        // followedEvents.map((e) => {
        //     if (e.date.split("T")[0] >= formattedToday) {
        //         futureEvents.push(e);
        //     }
        // });
    
        // //BRINGING EVENTS CREATED BY USER
        // const createdFutureEvents= [];
        // createdEvents.map((e) => {
        //     if (e.date.split("T")[0] >= formattedToday) {
        //         createdFutureEvents.push(e);
        //     }
        // });

    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = futureEvents.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log("CURRENT POSTS", currentPosts);
    
    //PAGINATION FOR EVENTS CREATED BY USER
    const [currentPageForCreated, setCurrentPageForCreated] = useState(1);
    const [postsPerPageForCreated] = useState(5);

    const indexOfLastPostForCreated = currentPageForCreated * postsPerPageForCreated;
    const indexOfFirstPostForCreated = indexOfLastPostForCreated - postsPerPageForCreated;
    const currentPostsForCreated = createdFutureEvents.slice(indexOfFirstPostForCreated, indexOfLastPostForCreated);
    const paginateForCreated = (pageNumber) => setCurrentPageForCreated(pageNumber);
    
    //JOIN-LEAVE EVENTS
    const [isJoined, setIsJoined] = useState({});
    function handleJoinClick(id) {
        setIsJoined((isJoined) => ({
            ...isJoined,
            [id]: !isJoined[id],
        }));
        // API Call to leave event
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
                {createdFutureEvents.length > 0 ? (
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
                                totalPosts={createdFutureEvents.length}
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
