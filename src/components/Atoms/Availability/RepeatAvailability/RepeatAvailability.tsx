import React from "react";
import InputSelect from "../../Inputs/InputSelect/InputSelect";
import ISelectOptions from "@/utils/Interfaces/ISelectOptions";

type RepeatAvailabilityProps = {
    title: string;
    setRepeatability: (repeat: string) => void;
};

const RepeatAvailability = ({
    title,
    setRepeatability,
}: RepeatAvailabilityProps) => {
    return (
        <div className="flex justify-between items-center">
            <p className="py-3 text-lg font-medium">{title}</p>
            <InputSelect
                onChange={setRepeatability}
                placeholder="Nunca"
                selectId="begin-day-availability"
                options={
                    [
                        { label: "Nunca", value: "never" },
                        { label: "Diariamente", value: "daily" },
                        { label: "Semanalmente", value: "weekly" },
                        { label: "Mensualmente", value: "monthly" },
                    ] as ISelectOptions[]
                }
                key={1}
            />
        </div>
    );
};

export default RepeatAvailability;
