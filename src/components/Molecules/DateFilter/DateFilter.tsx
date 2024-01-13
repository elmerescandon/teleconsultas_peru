"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

type DateFilterProps = {
    date: { init: string | null; finish: string | null };
    setDate: (date: { init: string | null; finish: string | null }) => void;
};

const DateFilter = ({ date, setDate }: DateFilterProps) => {
    const [init, setInit] = useState<string | null>(null);
    const [finish, setFinish] = useState<string | null>(null);
    return (
        <div className="flex gap-5 justify-end max-xl:flex-col">
            <DatePicker
                maxDate={finish}
                label="Fecha Inicio"
                value={init}
                onChange={(newDate) => {
                    if (newDate) {
                        setInit(newDate);
                        setDate({ ...date, init: newDate.toString() });
                    }
                }}
            />
            <DatePicker
                minDate={init}
                label="Fecha Final"
                value={finish}
                onChange={(newDate) => {
                    if (newDate) {
                        setDate({ ...date, finish: newDate.toString() });
                        setFinish(newDate);
                    }
                }}
            />
        </div>
    );
};

export default DateFilter;
