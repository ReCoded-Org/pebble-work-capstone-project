import InputComponent from "../InputComponent";
const CategoryCheckboxes = ({
    style = "mb-2 h-6 w-6 rounded text-secondary-300",
}) => {
    const categories = [
        {
            name: "all",
            label: "All",
        },
        {
            name: "no-poverty",
            label: "No Poverty",
        },
        {
            name: "zero-hunger",
            label: "Zero Hunger",
        },
        {
            name: "good-health-and-well-being",
            label: "Good Health and Well-being",
        },
        {
            name: "quality-education",
            label: "Quality Education",
        },
        {
            name: "gender-equality",
            label: "Gender Equality",
        },
        {
            name: "clean-water-and-sanitation",
            label: "Clean Water and Sanitation",
        },
        {
            name: "affordable-and-clean-energy",
            label: "Affordable and Clean Energy",
        },
        {
            name: "decent-work-and-economic-growth",
            label: "Decent Work and Economic Growth",
        },
        {
            name: "industry-innovation-and-infrastructure",
            label: "Industry, Innovation and Infrastructure",
        },
        {
            name: "reduced-inequalities",
            label: "Reduced Inequalities",
        },
        {
            name: "responsible-consumption-and-production",
            label: "Responsible Consumption and Production",
        },
        {
            name: "sustainable-cities-and-communities",
            label: "Sustainable Cities and Communities",
        },
        {
            name: "climate-action",
            label: "Climate Action",
        },
        {
            name: "life-below-water",
            label: "Life Below Water",
        },
        {
            name: "life-on-land",
            label: "Life on Land",
        },
        {
            name: "peace-and-justice-and-strong-institutions",
            label: "Peace and Justice and Strong Institutions",
        },
        {
            name: "partnership-for-the-goals",
            label: "Partnership for the Goals",
        },
    ];

    let checkedBoxes = [];
    function handleChange(e) {
        var value = e.target.value;
        if (value === "all") {
            if (document.getElementById("all").checked === false) {
                checkedBoxes = [];
                categories.map((category) => {
                    document.getElementById(category.name).checked = false;
                });
            } else {
                checkedBoxes = [];
                categories.map((category) => {
                    document.getElementById(category.name).checked = true;
                    if (category.name !== "all") {
                        checkedBoxes.push(category.name);
                    }
                });
            }
        } else if (e.target.checked) {
            checkedBoxes.push(value);
        } else {
            checkedBoxes.splice(checkedBoxes.indexOf(value), 1);
            document.getElementById("all").checked = false;
        }
    }
    function handleApplyFilters() {
        //api call to get events based on filters
        // console.log(checkedBoxes);
    }

    return (
        <div>
            <div className='relative w-full'>
                <div className='fixed left-0 right-0 bottom-0 z-10 h-4/5 overflow-y-scroll rounded-t-xl border border-black bg-white text-2xl shadow-lg scrollbar-thin scrollbar-thumb-secondary-300 sm:relative sm:h-56 sm:w-full sm:rounded sm:border-none sm:text-base'>
                    <div className='m-4 flex flex-col'>
                        <h1 className='text-center font-bold sm:hidden'>
                            Choose Category
                        </h1>
                        <form>
                            {categories.map((category) => {
                                return (
                                    <div key={category.name}>
                                        <InputComponent
                                            type='checkbox'
                                            name={category.name}
                                            id={category.name}
                                            value={category.name}
                                            label={` ${category.label}`}
                                            className={style}
                                            callback={handleChange}
                                        />
                                        <br />
                                    </div>
                                );
                            })}
                        </form>
                        <div className='fixed left-1/4 bottom-3 sm:static sm:bottom-0 sm:mx-auto'>
                            <form onClick={handleApplyFilters}>
                                <InputComponent
                                    type='button'
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
