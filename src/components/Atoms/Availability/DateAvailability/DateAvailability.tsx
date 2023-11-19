import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React from "react";

type DateAvailabilityProps = {
    title: string;
    date: string;
    setDate: (date: string | null) => void;
};

const DateAvailability = ({ title, date, setDate }: DateAvailabilityProps) => {
    return (
        <div className="flex justify-between items-center">
            <p className="py-3 text-lg font-medium">{title}</p>
            <DatePicker
                minDate={
                    dayjs(new Date().setDate(new Date().getDate() + 1)) as any
                }
                sx={
                    {
                        "& .MuiInputBase-root": {
                            height: "px",
                            width: "208px",
                        },
                    } as any
                }
                value={date}
                onChange={setDate}
            />
        </div>
    );
};

export default DateAvailability;
