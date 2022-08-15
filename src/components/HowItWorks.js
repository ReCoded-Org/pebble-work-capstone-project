import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";

import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HowItWorks() {
    return (
        <div className='how-it-works'>
            <h1 className='mt-5 flex justify-center text-4xl font-bold md:m-3 md:text-4xl lg:mb-9 lg:text-4xl'>
                How It Works
            </h1>
            <div className='flex flex-col items-center justify-center lg:flex-row'>
                <div className='m-4 w-64 overflow-hidden rounded pb-6 md:m-4 md:w-2/3 md:pb-0 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/register.png'
                        alt='Register'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='m-2 flex justify-center text-center text-2xl font-bold md:text-3xl lg:text-lg'>
                            Register
                        </div>
                        <p className='text-center text-gray-700 md:text-2xl lg:text-lg'>
                            Body placeholder for text paragraph, a paragraph is
                            a self-contained unit of text description.
                        </p>
                    </div>
                    <div className='mb-4 p-2 px-6 pt-4'>
                        <h1 className='title text-center font-bold md:text-2xl lg:text-lg'>
                            {" "}
                            <Link href='/posts/first-post'>
                                <a>
                                    Sign up{" "}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </Link>
                        </h1>
                    </div>
                </div>
                <div className='m-4 w-64 overflow-hidden rounded pb-6 md:m-4 md:w-2/3 md:pb-0 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/attend.png'
                        alt='Attend'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='m-2 flex justify-center text-center text-2xl font-bold md:text-3xl lg:text-lg'>
                            Attend events
                        </div>
                        <p className='text-center text-gray-700 md:text-2xl lg:text-lg'>
                            Body placeholder for text paragraph, a paragraph is
                            a self-contained unit of text description.
                        </p>
                    </div>
                    <div className='mb-4 p-2 px-6 pt-4'>
                        <h1 className='title text-center font-bold md:text-2xl lg:text-lg'>
                            {" "}
                            <Link href='/posts/first-post'>
                                <a>
                                    View events{" "}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </Link>
                        </h1>
                    </div>
                </div>
                <div className='m-4 w-64 overflow-hidden rounded pb-6 md:m-4 md:w-2/3 md:pb-0 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/organize.png'
                        alt='Organize'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='m-2 flex justify-center text-center text-2xl font-bold md:text-3xl lg:text-lg'>
                            Organize on your own!
                        </div>
                        <p className='text-center text-gray-700 md:text-2xl lg:text-lg'>
                            Body placeholder for text paragraph, a paragraph is
                            a self-contained unit of text description.
                        </p>
                    </div>
                    <div className='mb-4 p-2 px-6 pt-4'>
                        <h1 className='title text-center font-bold md:text-2xl lg:text-lg'>
                            {" "}
                            <Link href='/posts/first-post'>
                                <a>
                                    Get started{" "}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HowItWorks;
