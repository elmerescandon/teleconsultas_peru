import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import React from "react";

type SlotAppointmentVisibleProps = {
    availableAppointment: IAvailableAppointment;
};

const SlotAppointmentVisible = ({
    availableAppointment,
}: SlotAppointmentVisibleProps) => {
    const { startDate, endDate, available } = availableAppointment;
    return (
        <button
            disabled={!available}
            className={`
                px-3 py-2 rounded-md text-center text-xs font-semibold
                ${
                    available
                        ? "bg-brand-600 text-basic-white "
                        : "bg-neutral-50 text-neutral-400 border-0"
                }
                `}
            onClick={() => {}}
        >
            {`${new Date(startDate)
                .toLocaleTimeString()
                .replace(/:\d+ /, " ")} - ${new Date(endDate)
                .toLocaleTimeString()
                .replace(/:\d+ /, " ")} `}
        </button>
    );
};

export default SlotAppointmentVisible;
