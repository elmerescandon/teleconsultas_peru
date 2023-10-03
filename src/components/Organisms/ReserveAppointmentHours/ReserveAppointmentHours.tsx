import SlotAppointment from "@/components/Atoms/SlotAppointment/SlotAppointment";
import Loading from "@/components/Molecules/Loading/Loading";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import React from "react";

type ReserveAppointmentHoursProps = {
    availableAppointments: IAvailableAppointment[];
    loading: boolean;
};

const ReserveAppointmentHours = ({
    availableAppointments,
    loading,
}: ReserveAppointmentHoursProps) => {
    const slots = availableAppointments.map((appointment, index) => (
        <SlotAppointment key={index} availableAppointment={appointment} />
    ));

    return (
        <div className="px-5 max-">
            <div className="flex items-center gap-5">
                <div className="text-xl font-semibold py-4">
                    Horarios Disponibles
                </div>
                {loading && <Loading size={5} />}
            </div>

            {!loading && (
                <div className="flex flex-wrap gap-5 justify-start max-xl:justify-start max-md:justify-center">
                    {slots.length > 0 ? (
                        slots.map((slot) => slot)
                    ) : (
                        <p className="italic">No hay horarios disponibles</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ReserveAppointmentHours;
