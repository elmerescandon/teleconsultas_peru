import React from "react";
import InputSelect from "../../Inputs/InputSelect/InputSelect";
import { hoursOptions } from "@/utils/constants/registerSelect";

type HourAvailabilityProps = {
    setTime: (startTime: string) => void;
    title: string;
};

const HourAvailability = ({ setTime, title }: HourAvailabilityProps) => {
    return (
        <div className="flex justify-between items-center">
            <p className="py-3 text-lg font-medium">{title}</p>
            <InputSelect
                onChange={setTime}
                placeholder="Selecciona hora"
                selectId="begin-day-availability"
                options={hoursOptions}
                key={1}
            />
        </div>
    );
};

export default HourAvailability;
