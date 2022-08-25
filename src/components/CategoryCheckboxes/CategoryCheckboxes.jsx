import { useTranslation } from "next-i18next";

import InputComponent from "../InputComponent";
const CategoryCheckboxes = ({
    style = "mb-2 h-6 w-6 rounded text-secondary-300",
    categories = [],
    handleChange,
    handleApplyFilters,
}) => {
    const { t } = useTranslation("common");

    return (
        <div>
            <div className='relative w-full'>
                <div className='fixed left-0 right-0 bottom-0 z-10 h-4/5 overflow-y-scroll rounded-t-xl border border-black bg-white text-2xl shadow-lg scrollbar-thin scrollbar-thumb-secondary-300 sm:relative sm:h-56 sm:w-full sm:rounded sm:border-none sm:text-base'>
                    <div className='m-4 flex flex-col'>
                        <h1 className='text-center font-bold sm:hidden'>
                            {t("eventsPage.categoryCheckboxes.chooseCategory")}
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
                                    value={t(
                                        "eventsPage.categoryCheckboxes.applyFilters"
                                    )}
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
