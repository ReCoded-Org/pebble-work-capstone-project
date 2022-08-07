import Image from "next/image";
import TeamCards from "@/components/AboutPage/TeamCards";

const AboutPage = () => {
    return (
        <div className=''>
            <div className='relative'>
                <Image
                    src='/images/aboutPage.png'
                    alt='About Page Image'
                    width='100%'
                    height='60%'
                    className='w-full'
                    objectFit='contain'
                    layout='responsive'
                />
                <div className='absolute top-0 left-0 right-0 bottom-0'>
                    <div className='flex h-full w-full flex-col items-center justify-center'>
                        <h3 className='m-1 text-center text-2xl md:m-4 md:text-4xl lg:text-5xl'>
                            About Pebble Work
                        </h3>

                        <p className='mr-12 ml-12 text-center text-sm font-light md:ml-24 md:mr-24 md:text-xl lg:ml-32 lg:mr-32 lg:text-2xl'>
                            Body placeholder for text paragraph. A paragraph is
                            a self-contained unit of text dealing with a
                            particular point or idea.
                        </p>
                    </div>
                </div>
            </div>
            <div className='m-10 min-h-[450px] overflow-hidden rounded-md bg-[#fef1e6] md:m-20 md:min-h-[900px] lg:m-44'>
                <h2 className='p-4 text-center md:p-8 md:text-3xl lg:p-12 lg:text-4xl'>
                    Our Team
                </h2>
                <div className='flex flex-row flex-wrap justify-center'>
                    <TeamCards name={"Dilara Katuk"} />
                    <TeamCards name={"Ömer Faruk Ataş"} />
                    <TeamCards name={"Mayce Al-Azawii"} />
                    <TeamCards name={"Jangis Marifet"} />
                    <TeamCards name={"Öznur Ergen"} />
                </div>
            </div>
            <div className='m-16 md:m-36'>
                <h2 className='mb-2 text-center text-lg md:text-3xl'>
                    Technologies Used and Project Structure
                </h2>
                <p className='text-center text-sm font-light md:text-xl'>
                    Body placeholder for text paragraph. A paragraph is a
                    self-contained unit of text dealing with a particular point
                    or idea.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
