import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function HowItWorks() {
    return (
        <div className='how-it-works'>
            <h1 className='text-l mb-3 flex justify-center font-bold sm:mb-5 sm:text-xl md:mb-7 md:text-2xl lg:mb-9 lg:text-4xl'>
                How It Works
            </h1>
            <div className='flex items-center justify-center'>
                <div className='w-30 m-1 overflow-hidden rounded sm:m-2 md:m-4 md:w-52 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/register.png'
                        alt='Register'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='md:text-md mb-2 flex justify-center text-center text-[8px] font-bold sm:text-sm lg:text-lg'>
                            Register
                        </div>
                        <p className='md:text-md text-center  text-[6px] text-gray-700 sm:text-sm lg:text-lg'>
                            Body placeholder for text paragraph, a paragraph is
                            a self-contained unit of text description.
                        </p>
                    </div>
                    <div className=' px-6 pt-4 pb-2'>
                        <h1 className='title md:text-md text-center text-[8px] font-bold sm:text-sm lg:text-lg'>
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
                <div className='w-30 m-1 overflow-hidden rounded sm:m-2 md:m-4 md:w-52 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/attend.png'
                        alt='Attend'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='md:text-md mb-2 flex justify-center text-center text-[8px] font-bold sm:text-sm lg:text-lg'>
                            Attend events
                        </div>
                        <p className='md:text-md text-center  text-[6px] text-gray-700 sm:text-sm lg:text-lg'>
                            Body placeholder for text paragraph, a paragraph is
                            a self-contained unit of text description.
                        </p>
                    </div>
                    <div className=' px-6 pt-4 pb-2'>
                        <h1 className='title md:text-md text-center text-[8px] font-bold sm:text-sm lg:text-lg'>
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
                <div className='w-30 m-1 overflow-hidden rounded sm:m-2 md:m-4 md:w-52 lg:m-8 lg:w-80'>
                    <Image
                        class='w-full'
                        src='/images/organize.png'
                        alt='Organize'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                    <div className='px-6 py-4'>
                        <div className='md:text-md mb-2 flex justify-center text-center text-[8px] font-bold sm:text-sm lg:text-lg'>
                            Organize on your own!
                        </div>
                        <p className='md:text-md text-center text-[6px] text-gray-700 sm:text-sm lg:text-lg'>
                            Body placeholder for text paragraph, a paragraph is
                            a self-contained unit of text description.
                        </p>
                    </div>
                    <div className='px-6 pt-2 pb-2 sm:pt-4 md:pt-4 lg:pt-4'>
                        <h1 className='title md:text-md text-center text-[8px] font-bold sm:text-sm lg:text-lg'>
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
