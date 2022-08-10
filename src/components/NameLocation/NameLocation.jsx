import Image from "next/image";


import Button from "@/components/Button";

import InputComponent from "../InputComponent";

const NameLocation = () => {
    return (
        <div className='m-4 mt-4 md:m-12 lg:ml-16'>
            <h1 className='m-4 text-xl font-medium md:m-6 md:text-3xl lg:m-12 lg:text-5xl'>
                Edit Profile
            </h1>
            <div className='flex flex-row items-center justify-center overflow-hidden lg:ml-8 lg:justify-start'>
                <div className='m-1 mr-2 w-20 overflow-hidden md:mr-6 md:w-40 lg:w-44'>
                    <Image
                        src='/images/user.png'
                        alt='name-location'
                        width='100%'
                        height='100%'
                        layout='responsive'
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Upload New'
                        bgColor='bg-primary-200'
                        textColor='text-white'
                        fontWeight='font-medium'
                        width='w-20 md:w-44 lg:w-48'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor=''
                        fontSize='text-[11px] md:text-xl lg:text-xl'
                        border=''
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Choose From Library'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-60 lg:w-64'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[11px] md:text-xl lg:text-xl'
                        border='border border-b-2 border-r-2'
                    />
                </div>
            </div>
            <div className='m-4 mt-8 md:m-8 md:mt-12'>
                <label className='text-[12px] font-medium md:text-xl lg:text-xl'>
                    Name (Required)
                </label>
                <div className='mt-1 mb-3 h-8 md:mt-2 md:mb-9 md:h-14 md:w-[490px] lg:h-12  lg:w-[600px]'>
                    <input
                        type='text'
                        name='Name'
                        placeholder='Name'
                        required
                        className='h-full w-full rounded-md border-2 border-black p-2'
                    />
                </div>
                <label className='text-[12px] font-medium md:text-xl lg:text-xl'>
                    Your Location
                </label>
                <div className='mt-1 mb-3 h-8 md:mt-2 md:mb-9 md:h-14 md:w-[490px] lg:h-12 lg:w-[600px]'>
                    <InputComponent placeholder='Location' />
                </div>
            </div>
        </div>
    );
};

export default NameLocation;
