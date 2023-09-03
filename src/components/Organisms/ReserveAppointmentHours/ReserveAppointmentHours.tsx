import SlotAppointment from "@/components/Atoms/SlotAppointment/SlotAppointment";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import React from "react";

type ReserveAppointmentHoursProps = {
    availableAppointments: IAvailableAppointment[];
};

const ReserveAppointmentHours = ({
    availableAppointments,
}: ReserveAppointmentHoursProps) => {
    const slots = availableAppointments.map((appointment, index) => (
        <SlotAppointment key={index} availableAppointment={appointment} />
    ));

    return (
        <div className="px-5 max-">
            <div className="text-xl font-semibold py-4">
                Horarios Disponibles
            </div>
            <div className="flex  gap-5 justify-around max-xl:justify-start max-md:justify-center">
                {slots.length > 0
                    ? slots.map((slot) => slot)
                    : "No hay horarios disponibles"}
            </div>
        </div>
    );
};

export default ReserveAppointmentHours;
