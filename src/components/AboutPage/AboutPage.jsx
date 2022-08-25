import Image from "next/image";
import { useTranslation } from "next-i18next";

import TeamCards from "@/components/AboutPage/TeamCards";

const AboutPage = () => {
    const { t } = useTranslation("common");
    const team = [
        {
            name: "Salah Al-Dhaferi",
            github: "https://github.com/tech-chieftain",
            linkedin: "https://www.linkedin.com/in/salah-aldhaferi/",
            instagram: "https://www.instagram.com/nasa",
            imageLink: "/images/salah.jpeg",
        },
        {
            name: "Dilara Katuk",
            github: "https://github.com/DKatuk",
            linkedin: "https://www.linkedin.com/in/dilara-katuk-0bab56211/",
            instagram: "https://www.instagram.com/dkdilara_/",
            imageLink: "/images/dilara.jpeg",
        },
        {
            name: "Ömer Faruk Ataş",
            github: "https://github.com/omerfarukatas",
            linkedin: "https://www.linkedin.com/in/omerfarukatas/",
            instagram: "https://www.instagram.com/omerfarukatas/",
            imageLink: "/images/omer.jpeg",
        },
        {
            name: "Mayce Al-Azawii",
            github: "https://github.com/MayceAlazzawi",
            linkedin:
                "https://www.linkedin.com/mwlite/in/mays-al-azzawi-58912a1a8",
            instagram: "https://www.instagram.com/mys_alazzawi/",
            imageLink: "/images/mayce.jpeg",
        },
        {
            name: "Jangis Marifet",
            github: "https://github.com/jangismarifet",
            linkedin: "https://www.linkedin.com/in/jangis-marifet-21504141/",
            instagram: "https://www.instagram.com/jangismarifet/",
            imageLink: "/images/jangis.jpeg",
        },
        {
            name: "Öznur Ergen",
            github: "https://www.github.com/oznuren/",
            linkedin: "https://www.linkedin.com/in/oznuren/",
            instagram: "https://www.instagram.com/nasa/",
            imageLink: "/images/oznur.png",
        },
    ];

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
                        <h3 className='m-1 text-center text-3xl font-bold md:m-4 md:text-5xl md:font-bold lg:text-5xl lg:font-bold'>
                            {t("aboutPage.header.title")}
                        </h3>

                        <p className='text-md mr-12 ml-12 text-center md:ml-24 md:mr-24 md:text-2xl lg:ml-32 lg:mr-32 lg:text-2xl'>
                            {t("aboutPage.header.description")}
                        </p>
                    </div>
                </div>
            </div>
            <div className='m-10 min-h-[320px] overflow-hidden rounded-3xl bg-[#fef1e6] md:m-20 md:min-h-[900px] lg:m-44'>
                <h2 className='p-4 text-center text-2xl font-medium md:p-8 md:text-4xl md:font-bold lg:p-12 lg:text-5xl lg:font-bold'>
                    {t("aboutPage.team.ourTeam")}
                </h2>
                <div className='flex flex-row flex-wrap justify-center'>
                    {team.map((member, index) => {
                        return (
                            <TeamCards
                                key={index}
                                name={member.name}
                                github={member.github}
                                linkedin={member.linkedin}
                                instagram={member.instagram}
                                imageLink={member.imageLink}
                            />
                        );
                    })}
                </div>
            </div>
            <div className='m-16 md:m-36'>
                <h2 className='mb-2 text-center text-2xl font-bold md:mb-4 md:text-4xl lg:mb-4 lg:text-4xl'>
                    {t("aboutPage.stack.techTitle")}
                </h2>
                <p className='text-center text-sm md:text-2xl'>
                    {t("aboutPage.stack.techDesc")}
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
