"use client";
import PatientAppointments from "@/components/Organisms/PatientAppointments/PatientAppointments";
import PatientMain from "@/components/Organisms/PatientMain/PatientMain";
import PatientTreatments from "@/components/Organisms/PatientTreatments/PatientTreatments";
import React from "react";

const PatientHome = () => {
    return (
        <div className="flex flex-col items-center px-48 h-full py-10 max-xl:pt-36 gap-5 max-xl:px-5">
            <PatientMain />
            <div className="flex gap-5 w-full max-xl:flex-col">
                <PatientTreatments />
                <PatientAppointments />
            </div>
        </div>
    );
};

export default PatientHome;
