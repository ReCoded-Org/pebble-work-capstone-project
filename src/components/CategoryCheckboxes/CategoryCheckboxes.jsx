import InputComponent from "../InputComponent";
const CategoryCheckboxes = ({
    style = "mb-2 h-6 w-6 rounded text-secondary-300",
}) => {
    return (
        <div>
            <div className='relative w-full'>
                <div className='fixed left-0 right-0 bottom-0 z-10 h-4/5 overflow-y-scroll rounded-t-xl border border-black bg-white text-2xl shadow-lg scrollbar-thin scrollbar-thumb-secondary-300 sm:relative sm:h-56 sm:w-full sm:rounded sm:border-none sm:text-base'>
                    <div className='m-4 flex flex-col'>
                        <h1 className='text-center font-bold sm:hidden'>
                            Choose Category
                        </h1>
                        <form>
                            <InputComponent
                                type='checkbox'
                                name='all'
                                id='all'
                                Value='all'
                                label=' All'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='no-poverty'
                                id='no-poverty'
                                value='no-poverty'
                                label=' No Poverty'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='zero-hunger'
                                id='zero-hunger'
                                value='zero-hunger'
                                label=' Zero Hunger'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='good-health-and-well-being'
                                id='good-health-and-well-being'
                                value='good-health-and-well-being'
                                label=' Good Health and Well-Being'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='quality-education'
                                id='quality-education'
                                value='quality-education'
                                label=' Quality Education'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='gender-equality'
                                id='gender-equality'
                                value='gender-equality'
                                label=' Gender Equality'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='clean-water-and-sanitation'
                                id='clean-water-and-sanitation'
                                value='clean-water-and-sanitation'
                                label=' Clean Water and Sanitation'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='affordable-and-clean-energy'
                                id='affordable-and-clean-energy'
                                value='affordable-and-clean-energy'
                                label=' Affordable and Clean Energy'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='decent-work-and-economic-growth'
                                id='decent-work-and-economic-growth'
                                value='decent-work-and-economic-growth'
                                label=' Decent Work and Economic Growth'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='industry-innovation-and-infrastructure'
                                id='industry-innovation-and-infrastructure'
                                value='industry-innovation-and-infrastructure'
                                label=' Industry, Innovation and Infrastructure'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='reduced-inequalities'
                                id='reduced-inequalities'
                                value='reduced-inequalities'
                                label=' Reduced Inequalities'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='sustainable-cities-and-communities'
                                id='sustainable-cities-and-communities'
                                value='sustainable-cities-and-communities'
                                label=' Sustainable Cities and Communities'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='responsible-consumption-and-production'
                                id='responsible-consumption-and-production'
                                value='responsible-consumption-and-production'
                                label=' Responsible Consumption and Production'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='climate-action'
                                id='climate-action'
                                value='climate-action'
                                label=' Climate Action'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='life-below-water'
                                id='life-below-water'
                                value='life-below-water'
                                label=' Life Below Water'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='life-on-land'
                                id='life-on-land'
                                value='life-on-land'
                                label=' Life on Land'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='peace-and-justice-and-strong-institutions'
                                id='peace-and-justice-and-strong-institutions'
                                value='peace-and-justice-and-strong-institutions'
                                label=' Peace and Justice and Strong Institutions'
                                className={style}
                            />
                            <br />
                            <InputComponent
                                type='checkbox'
                                name='partnership-for-the-goals'
                                id='partnership-for-the-goals'
                                value='partnership-for-the-goals'
                                label=' Partnership for the Goals'
                                className={style}
                            />
                            <br />
                        </form>
                        <div className='fixed left-1/4 bottom-3 sm:static sm:bottom-0 sm:mx-auto'>
                            <form>
                                <InputComponent
                                    type='Submit'
                                    className='mt-2 w-48 rounded-md border-2 bg-secondary-300 text-white'
                                    value='Apply Filters'
                                />
                            </form>
                        </div>
                        <div className='my-5 sm:hidden'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCheckboxes;
