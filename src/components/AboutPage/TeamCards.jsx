import Image from "next/image";

const TeamCards = ({ name, github, linkedin, instagram, imageLink }) => {
    return (
        <div>
            <div className='m-4 h-28 w-28 overflow-hidden rounded-2xl bg-secondary-100 md:m-8 md:h-60 md:w-60 lg:m-12 lg:h-80 lg:w-80'>
                <div className='mt-2 flex justify-center md:mt-3 lg:mt-4'>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full pt-2 text-center md:mt-4 md:h-28 md:w-28 md:pt-4 lg:h-36 lg:w-36'>
                        <Image
                            src={imageLink}
                            alt='User'
                            width='100%'
                            height='100%'
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                </div>
                <h4 className='pt-2 pb-2 text-center text-[10px] font-medium md:pb-2 md:pt-2 md:text-[24px]'>
                    {name}
                </h4>
                <div className='align-start content-bottom flex flex-row justify-center pb-2 md:ml-1 md:mt-2 md:content-end lg:mt-8'>
                    <div className='m-px h-4 w-4 hover:cursor-pointer md:h-8 md:w-8 lg:h-12 lg:w-12'>
                        <a
                            href={linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src='/images/linkedin.png'
                                alt='User'
                                width='100%'
                                height='100%'
                            />
                        </a>
                    </div>
                    <div className='m-px h-4 w-4 hover:cursor-pointer md:h-8 md:w-8 lg:h-12 lg:w-12'>
                        <a
                            href={github}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src='/images/github.png'
                                alt='User'
                                width='100%'
                                height='100%'
                            />
                        </a>
                    </div>
                    <div className='m-px h-4 w-4 hover:cursor-pointer md:h-8 md:w-8 lg:h-12 lg:w-12'>
                        <a
                            href={instagram}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src='/images/instagram.png'
                                alt='User'
                                width='100%'
                                height='100%'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCards;
