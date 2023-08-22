import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import React from "react";

type SlotAppointmentProps = {
    availableAppointment: IAvailableAppointment;
};

const SlotAppointment = ({ availableAppointment }: SlotAppointmentProps) => {
    const { startDate, endDate, available } = availableAppointment;
    return (
        <button
            disabled={!available}
            className={`
                px-3 py-2 rounded-md text-center
                ${
                    available
                        ? "bg-brand-600 text-basic-white"
                        : "bg-neutral-50 text-neutral-400"
                }`}
        >
            {`${startDate
                .toLocaleTimeString()
                .replace(/:\d+ /, " ")} - ${endDate
                .toLocaleTimeString()
                .replace(/:\d+ /, " ")} `}
        </button>
    );
};

export default SlotAppointment;
