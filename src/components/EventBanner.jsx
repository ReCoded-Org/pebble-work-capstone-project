import Image from "next/image";
import * as React from "react";

function EventBanner({
    title,
    imageSrc,
    city,
    neighborhood,
    address,
    attendees,
    host,
}) {
    let attendeeAvatars = [];
    for (let i = 0; i < 3; i++) {
        attendeeAvatars.push(
            <svg
                key={i+1}
                className='-ml-6'
                width='45'
                height='42'
                viewBox='0 0 45 42'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <rect width='44.8' height='42' rx='21' fill='#1A1A1A' />
                <path
                    d='M18.8836 26C18.7836 26 18.6986 25.965 18.6286 25.895C18.5586 25.825 18.5236 25.74 18.5236 25.64V15.875C18.5236 15.765 18.5586 15.675 18.6286 15.605C18.6986 15.535 18.7836 15.5 18.8836 15.5H22.7686C23.9786 15.5 24.9336 15.78 25.6336 16.34C26.3336 16.9 26.6836 17.715 26.6836 18.785C26.6836 19.525 26.4986 20.14 26.1286 20.63C25.7686 21.12 25.2836 21.475 24.6736 21.695L26.8636 25.52C26.8936 25.58 26.9086 25.635 26.9086 25.685C26.9086 25.775 26.8736 25.85 26.8036 25.91C26.7436 25.97 26.6736 26 26.5936 26H25.2286C25.0586 26 24.9286 25.955 24.8386 25.865C24.7486 25.775 24.6786 25.685 24.6286 25.595L22.6936 22.04H20.6086V25.64C20.6086 25.74 20.5736 25.825 20.5036 25.895C20.4436 25.965 20.3586 26 20.2486 26H18.8836ZM20.6086 20.345H22.7236C23.3336 20.345 23.7886 20.21 24.0886 19.94C24.3886 19.66 24.5386 19.27 24.5386 18.77C24.5386 18.27 24.3886 17.88 24.0886 17.6C23.7986 17.31 23.3436 17.165 22.7236 17.165H20.6086V20.345Z'
                    fill='white'
                />
            </svg>
        );
    }
    return (
        <div className='grid-col-1 grid grid-flow-row gap-2 md:grid-cols-3 md:gap-10 md:pl-6'>
            <h1 className='order-1 col-span-1 p-6 text-center text-2xl md:order-first md:col-span-3 md:text-left md:text-4xl'>
                {title}
            </h1>
            <div className='border-first col-span-1 flex justify-center pb-6 md:order-1 md:col-span-2 md:pl-6'>
                <Image
                    className='rounded'
                    src={imageSrc}
                    alt={`${title},image`}
                    width={800}
                    height={600}
                />
            </div>
            <div className='order-last col-span-1 flex flex-col justify-items-start justify-self-center p-6 md:items-start md:pt-48'>
                <div className='flex'>
                    <svg
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M21.0001 3.5C13.2809 3.5 7.00014 9.78075 7.00014 17.4913C6.94939 28.77 20.4681 38.122 21.0001 38.5C21.0001 38.5 35.0509 28.77 35.0001 17.5C35.0001 9.78075 28.7194 3.5 21.0001 3.5ZM21.0001 24.5C17.1326 24.5 14.0001 21.3675 14.0001 17.5C14.0001 13.6325 17.1326 10.5 21.0001 10.5C24.8676 10.5 28.0001 13.6325 28.0001 17.5C28.0001 21.3675 24.8676 24.5 21.0001 24.5Z'
                            fill='black'
                        />
                    </svg>
                    <div>
                        <p>
                            <b>{city}</b>
                        </p>
                        <p>{neighborhood}</p>
                        <p>{address}</p>
                    </div>
                </div>
                <div className='flex items-center pt-6'>
                    {attendeeAvatars}
                    <p className='pl-6'>{`+${attendees.length} Attendees`}</p>
                </div>
                <div className='flex items-center pt-6 pb-12'>
                    <svg
                        className='-ml-6'
                        width='45'
                        height='42'
                        viewBox='0 0 45 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <rect width='44.8' height='42' rx='21' fill='#1A1A1A' />
                        <path
                            d='M18.8836 26C18.7836 26 18.6986 25.965 18.6286 25.895C18.5586 25.825 18.5236 25.74 18.5236 25.64V15.875C18.5236 15.765 18.5586 15.675 18.6286 15.605C18.6986 15.535 18.7836 15.5 18.8836 15.5H22.7686C23.9786 15.5 24.9336 15.78 25.6336 16.34C26.3336 16.9 26.6836 17.715 26.6836 18.785C26.6836 19.525 26.4986 20.14 26.1286 20.63C25.7686 21.12 25.2836 21.475 24.6736 21.695L26.8636 25.52C26.8936 25.58 26.9086 25.635 26.9086 25.685C26.9086 25.775 26.8736 25.85 26.8036 25.91C26.7436 25.97 26.6736 26 26.5936 26H25.2286C25.0586 26 24.9286 25.955 24.8386 25.865C24.7486 25.775 24.6786 25.685 24.6286 25.595L22.6936 22.04H20.6086V25.64C20.6086 25.74 20.5736 25.825 20.5036 25.895C20.4436 25.965 20.3586 26 20.2486 26H18.8836ZM20.6086 20.345H22.7236C23.3336 20.345 23.7886 20.21 24.0886 19.94C24.3886 19.66 24.5386 19.27 24.5386 18.77C24.5386 18.27 24.3886 17.88 24.0886 17.6C23.7986 17.31 23.3436 17.165 22.7236 17.165H20.6086V20.345Z'
                            fill='white'
                        />
                    </svg>
                    <p className='pl-6'>{`Organized by ${host}`}</p>
                </div>
                <button className='h-12 w-48 rounded bg-primary-200'>
                    Join
                </button>
            </div>
        </div>
    );
}

export default EventBanner;
