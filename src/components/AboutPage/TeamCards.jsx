import Image from "next/image";
const TeamCards = ({ name }) => {
    return (
        <div>
            <div className='m-4 h-24 w-24 overflow-hidden rounded-md bg-secondary-100 md:m-8 md:h-48 md:w-48 lg:m-12 lg:h-60 lg:w-60'>
                <div className='mt-2 flex justify-center md:mt-3 lg:mt-4'>
                    <div className='relative h-9 w-9 pt-2 text-center md:h-20 md:w-20 md:pt-4 lg:h-28 lg:w-28'>
                        <Image
                            src='/images/user.png'
                            alt='User'
                            width='100%'
                            height='100%'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                </div>
                <h4 className='pt-2 pb-2 text-center text-[10px] md:pb-4 md:pt-4 md:text-lg'>
                    {name}
                </h4>
                <div className='align-start flex flex-row justify-center pb-2 md:ml-1'>
                    <div className='m-px h-4 w-4 md:h-8 md:w-8'>
                        <Image
                            src='/images/linkedin.png'
                            alt='User'
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='m-px h-4 w-4 md:h-8 md:w-8'>
                        <Image
                            src='/images/github.png'
                            alt='User'
                            width='100%'
                            height='100%'
                        />
                    </div>
                    <div className='m-px h-4 w-4 md:h-8 md:w-8'>
                        <Image
                            src='/images/instagram.png'
                            alt='User'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCards;
