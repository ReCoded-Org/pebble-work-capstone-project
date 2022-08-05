import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CalendarComp = ({ style }) => {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: "selection",
        },
    ]);

    return (
        <div className={style}>
            <div className='calendarWrap relative md:h-72 lg:h-fit'>
                <div className='flex flex-col items-center justify-center text-2xl sm:relative sm:mb-2   '>
                    <div className='wrapper mt-4 w-fit origin-top sm:mt-0'>
                        <DateRange
                            onChange={(item) => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={1}
                            fixedHeight={false}
                            rangeColors={["#0180AB", "#BDD6D0"]}
                            direction='vertical'
                            className='calendarElement border-2'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarComp;
