"use client";
import DayAvailability from "@/components/Molecules/DayAvailability/DayAvailability";
import React from "react";

const DoctorAvailabilityHours = () => {
    return (
        <div className="flex items-center gap-5">
            <div>
                <DayAvailability day="Lunes" />
                <DayAvailability day="Martes" />
                <DayAvailability day="Miercoles" />
            </div>
            <div>
                <DayAvailability day="Jueves" />
                <DayAvailability day="Viernes" />
                <DayAvailability day="Sábado" />
            </div>
        </div>
    );
};

export default DoctorAvailabilityHours;
