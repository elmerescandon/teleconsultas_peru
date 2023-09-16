import DoctorAppointmentFilter from "@/components/Organisms/DoctorAppointmentFilter/DoctorAppointmentFilter";
import React from "react";

const DoctorAppointmentSection = () => {
    return (
        <div className="px-48">
            <p className="text-2xl font-semibold">Mis citas</p>
            <DoctorAppointmentFilter />
        </div>
    );
};

export default DoctorAppointmentSection;
