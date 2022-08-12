import Image from "next/image";
const SustainableGoals = () => {
    return (
        <div className='flex flex-col justify-center gap-10 md:mx-8 md:mt-20 md:mb-36 lg:mx-32'>
            <div className='mx-4 text-center'>
                <h1 className='text-4xl font-bold'>
                    Sustainable Development Goals
                </h1>
                <p className='mt-5 text-xl md:mx-24'>
                    Sustainable Development, adopted by all United Nations
                    Member States in 2015, provides a shared blueprint for peace
                    and prosperity for people and the planet, now and into the
                    future.
                </p>
            </div>
            <div className='mx-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-01.png'
                    alt='no-poverty-goal-logo'
                    width={1500}
                    height={1500}
                />

                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-02.png'
                    alt='zero-hunger-goal-logo'
                    width={1500}
                    height={1500}
                />

                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-03.png'
                    alt='good-health-and-well-being-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-04.png'
                    alt='quality-education-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-05.png'
                    alt='gender-equality-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-06.png'
                    alt='clean-water-and-sanitation-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-07.png'
                    alt='affordable-and-clean-energy-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-08.png'
                    alt='decent-work-and-economic-growth-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-09.png'
                    alt='industry-innovation-and-infrastructure-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-10.png'
                    alt='reduced-inequalities-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-11.png'
                    alt='sustainable-citties-and-communities-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-12.png'
                    alt='responsible-consumption-and-production-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-13.png'
                    alt='climate-action-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-14.png'
                    alt='life-below-water-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-15.png'
                    alt='life-on-land-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-16.png'
                    alt='peace-justice-and-strong-institutions-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/E-WEB-Goal-17.png'
                    alt='partnership-for-the-goals-goal-logo'
                    width={1500}
                    height={1500}
                />
                <Image
                    className='rounded'
                    src='/images/goal_images/SDG Wheel_WEB.png'
                    alt='partnership-for-the-goals-goal-logo'
                    width={1500}
                    height={1500}
                />
            </div>
        </div>
    );
};

export default SustainableGoals;
