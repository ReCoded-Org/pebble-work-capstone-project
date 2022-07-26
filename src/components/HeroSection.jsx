import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className='heroSection / // mx-4 flex flex-col items-center md:relative md:w-full lg:static lg:mx-32 lg:w-auto lg:flex-row lg:justify-center'>
            <div className='tabletImageOverlay / absolute z-10 hidden h-[638px] w-[638px] rounded-lg bg-gradient-to-t from-orange-300 via-orange-50 opacity-80 md:block lg:hidden'></div>
            <div className='titleTextButton / // -bottom-96 z-20 flex h-auto flex-col items-center md:absolute md:h-full lg:static lg:w-1/2 lg:items-start'>
                <div className='titleText // flex flex-col items-center lg:items-start'>
                    <h1 className='// mb-4 text-center text-3xl font-bold text-black md:w-auto md:text-center md:text-4xl md:font-extrabold md:text-black lg:w-4/5 lg:text-left lg:text-3xl lg:font-bold lg:text-black xl:text-4xl'>
                        Medium title placeholder text
                    </h1>
                    <p className='// text-center text-gray-500 md:w-3/5 md:text-xl md:text-black lg:w-4/5 lg:text-left lg:text-lg lg:text-gray-500 xl:text-xl'>
                        Body placeholder for text paragraph. A paragraph is a
                        self-contained unit of text dealing with a particular
                        point or idea.{" "}
                    </p>
                </div>
                <button className='mt-6 w-28 rounded-lg bg-cyan-600 py-2 font-semibold text-white lg:w-32 lg:text-lg xl:w-40 xl:text-xl'>
                    Get started
                </button>
            </div>
            <div className='mt-6 md:mt-auto lg:w-1/2 xl:w-auto'>
                <Image
                    src='/images/hero-image.png'
                    alt='hero image'
                    width={638}
                    height={638}
                    className='z-0'
                />
            </div>
        </div>
    );
};

export default HeroSection;
