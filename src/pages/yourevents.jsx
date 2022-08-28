import { format } from "date-fns";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

import EventCards from "@/components/EventCards";
import Layout from "@/components/layout/Layout";
import Pagination from "@/components/Pagination/Pagination";
import Quotes from "@/components/Qutoes";

export async function getServerSideProps({ locale }) {
    const events = await fetch(
        `https://pebble-work.herokuapp.com/api/event/`
    ).then((r) => r.json());
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            events,
        },
    };
}

const YourEvents = ({ events }) => {
    const { t } = useTranslation("common");
    let today = new Date();
    let formattedToday = format(today, "yyyy-MM-dd");

    const futureEvents = [];
    events.map((e) => {
        if (e.date.split("T")[0] >= formattedToday) {
            futureEvents.push(e);
        }
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = futureEvents.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <div className='justify center my-6 flex flex-col items-center'>
                <h1 className='text-2xl font-bold'>
                    {t("yourEvents.yourUpcomingEvents")}
                </h1>
            </div>
            <hr />
            <div className='mx-4 sm:mx-44'>
                {events.length > 0 ? (
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
                                totalPosts={events.length}
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
        </Layout>
    );
};

export default YourEvents;
