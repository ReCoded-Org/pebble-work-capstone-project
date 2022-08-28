import { useTranslation } from "next-i18next";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import Button from "@/components/Button";

const CalendarComp = ({ style, setRange, range, handleDateSubmit }) => {
    const { t } = useTranslation("common");

    return (
        <div className={style}>
            <div className='calendarWrap relative md:h-72 lg:h-fit'>
                <div className='flex flex-col items-center justify-center text-2xl sm:relative sm:mb-2   '>
                    <div className='wrapper mt-4 flex w-fit origin-top flex-col items-center sm:mt-0'>
                        <DateRange
                            onChange={(item) => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={1}
                            fixedHeight={true}
                            rangeColors={["#0180AB", "#BDD6D0"]}
                            direction='vertical'
                            className='calendarElement mb-2 border-2'
                        />
                        <Button
                            type='submit'
                            label={t("eventsPage.calendarComp.submit")}
                            customStyle='text-base rounded-md bg-secondary-300 border-secondary-300 border-2 text-white mt-0 mb-0 py-0 px-0 bg-white shadow-sm w-48'
                            onClick={handleDateSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarComp;
