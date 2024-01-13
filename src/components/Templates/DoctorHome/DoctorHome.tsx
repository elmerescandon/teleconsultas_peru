import DoctorAppointments from "@/components/Organisms/DoctorAppointments/DoctorAppointments";
import DoctorDashboard from "@/components/Organisms/DoctorDashboard/DoctorDashboard";
import PatientMain from "@/components/Organisms/PatientMain/PatientMain";
import React from "react";

const DoctorHome = () => {
    return (
        <div className="flex flex-col items-center px-48 h-full py-10 max-xl:pt-36 gap-5 max-xl:px-5 w-full">
            <PatientMain />
            <div
                className="w-full flex
                            max-xl:flex-col"
            >
                {/* <DoctorDashboard /> */}
                <DoctorAppointments />
            </div>
        </div>
    );
};

export default DoctorHome;
