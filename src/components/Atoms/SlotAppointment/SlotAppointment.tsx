import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import { useAppointmentDispatch } from "@/utils/context/AppointmentContext/AppointmentContext";
import React from "react";

type SlotAppointmentProps = {
    availableAppointment: IAvailableAppointment;
    id: number;
    currentId: number;
    setId: (id: number) => void;
};

const SlotAppointment = ({
    availableAppointment,
    id,
    currentId,
    setId,
}: SlotAppointmentProps) => {
    // TODO: Animate button
    const { startDate, endDate, available } = availableAppointment;
    const dispatch = useAppointmentDispatch();
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

                ${
                    currentId === id
                        ? "bg-brand-600 text-basic-white"
                        : "bg-white text-brand-900 border-2 border-brand-600"
                }

                `}
            onClick={() => {
                setId(id);
                dispatch({
                    type: "SET_TIME",
                    payload: { startDate, endDate },
                });
            }}
        >
            {`${new Date(startDate)
                .toLocaleTimeString()
                .replace(/:\d+ /, " ")} - ${new Date(endDate)
                .toLocaleTimeString()
                .replace(/:\d+ /, " ")} `}
        </button>
    );
};

export default SlotAppointment;
