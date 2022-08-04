import Button from "../Button";

const EditInterests = () => {
    const clickHandler = (e) => {
        bgColor = "bg-primary-200";
        textColor = "text-white";
    };
    return (
        <div className='m-4 mt-12 md:m-12'>
            <h2 className='text-md m-4 font-medium md:m-6 md:text-2xl lg:mt-16 lg:ml-12 lg:text-3xl'>
                Your Interests
            </h2>
            <div className='flex flex-wrap items-center justify-center overflow-hidden lg:ml-8 lg:flex-row lg:flex-wrap lg:items-start lg:justify-start'>
                <div className='m-1 md:m-2'>
                    <Button
                        label='No Poverty'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-20 md:w-44 lg:w-40'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                        onClick={clickHandler}
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Industry, Innovation and Infrastructure'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-[400px] lg:w-[400px]'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border  lg:border-2'
                    />
                </div>

                <div className='m-1 md:m-2'>
                    <Button
                        label='Quality Education'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-52 lg:w-52'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Sustainable Cities and Communities'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-96 lg:w-96'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>

                <div className='m-1 md:m-2'>
                    <Button
                        label='Gender Equality'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-52 lg:w-52'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Affordable and Clean Energy'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-80 lg:w-80'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>

                <div className='m-1 md:m-2'>
                    <Button
                        label='Decent Work and Economic Growth'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-96 lg:w-96'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Reduced Inequalities'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-64 lg:w-64'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>

                <div className='m-1 md:m-2'>
                    <Button
                        label='Good Health and Well-Being'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-80 lg:w-80'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Clean Water and Sanitation'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-72 lg:w-80'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border  lg:border-2'
                    />
                </div>

                <div className='m-1 md:m-2'>
                    <Button
                        label='Responsible Consumption and Production'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-[440px] lg:w-[440px]'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Life Below Water'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-52 lg:w-52'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>

                <div className='m-1 md:m-2'>
                    <Button
                        label='Life On Land'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-44 lg:w-52'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>
                <div className='m-1 md:m-2'>
                    <Button
                        label='Peace, Justice and Strong Institutions'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-[400px] lg:w-[400px]'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[9px] md:text-xl lg:text-xl'
                        border='border lg:border-2'
                    />
                </div>
            </div>
            <div className='mt-6 mb-12 flex flex-row justify-end'>
                <Button
                    label='Save Changes'
                    bgColor='bg-secondary-300'
                    textColor='text-white'
                    fontWeight='font-medium'
                    width='w-24 md:w-44 lg:w-48'
                    height='h-8 md:h-14 lg:h-14'
                    borderColor=''
                    fontSize='text-[11px] md:text-xl lg:text-xl'
                    border=''
                />
            </div>
        </div>
    );
};

export default EditInterests;
