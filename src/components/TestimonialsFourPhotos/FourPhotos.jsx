import React from "react";

export default function FourPhotos() {
    return (
        <div className='mx-4 my-4 mt-32 flex h-[35rem] gap-4 md:mx-5 lg:mx-32'>
            <div className='flex w-1/2 flex-col gap-4'>
                <div
                    className='h-full rounded-lg bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: "url(/images/FourPhotos-1.png)" }}
                ></div>
                <div
                    className='h-1/2 rounded-lg bg-cover bg-right bg-no-repeat'
                    style={{ backgroundImage: "url(/images/FourPhotos-2.png)" }}
                ></div>
            </div>
            <div className='flex w-1/2 flex-col gap-4'>
                <div
                    className='h-1/2 rounded-lg bg-cover bg-right bg-no-repeat'
                    style={{ backgroundImage: "url(/images/FourPhotos-3.png)" }}
                ></div>
                <div
                    className='h-1/2 rounded-lg bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: "url(/images/FourPhotos-4.png)" }}
                ></div>
            </div>
        </div>
    );
}
