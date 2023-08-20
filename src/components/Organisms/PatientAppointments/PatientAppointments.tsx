import PatientDate from "@/components/Molecules/PatientDate/PatientDate";
import React from "react";

const PatientAppointments = () => {
    return (
        <div className="w-2/3 rounded-3xl border-neutral-300 border-2 py-5 px-10 h-96">
            <div className="text-xl font-semibold">Citas Agendadas</div>
            <div className="flex flex-col items-center py-5">
                <PatientDate />
            </div>
        </div>
    );
};

export default PatientAppointments;
