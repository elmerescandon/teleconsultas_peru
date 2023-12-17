"use client";
import { DatePicker } from "@mui/x-date-pickers";

type DateFilterProps = {
    date: { init: string | null; finish: string | null };
    setDate: (date: { init: string | null; finish: string | null }) => void;
};

const DateFilter = ({ date, setDate }: DateFilterProps) => {
    return (
        <div className="flex gap-5 justify-end max-xl:flex-col">
            <DatePicker
                maxDate={date.finish}
                // label="Fecha Inicio"
                value={date.init}
                onChange={(newDate) => {
                    if (newDate) setDate({ ...date, init: newDate });
                }}
            />
            <DatePicker
                minDate={date.init}
                // label="Fecha Final"
                value={date.finish}
                onChange={(newDate) => {
                    setDate({ ...date, finish: newDate });
                }}
            />
        </div>
    );
};

export default DateFilter;
