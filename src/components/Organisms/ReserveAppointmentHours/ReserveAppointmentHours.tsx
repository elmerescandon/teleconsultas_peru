import SlotAppointment from "@/components/Atoms/SlotAppointment/SlotAppointment";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import React from "react";

type ReserveAppointmentHoursProps = {
    availableAppointments: IAvailableAppointment[];
};

const ReserveAppointmentHours = ({
    availableAppointments,
}: ReserveAppointmentHoursProps) => {
    return (
        <div className="w-1/3 px-5">
            <div className="text-xl font-semibold py-4">
                Horarios Disponibles
            </div>
            <div className="flex flex-wrap gap-5 justify-around">
                {availableAppointments.map((appointment, index) => (
                    <SlotAppointment
                        key={index}
                        availableAppointment={appointment}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReserveAppointmentHours;
