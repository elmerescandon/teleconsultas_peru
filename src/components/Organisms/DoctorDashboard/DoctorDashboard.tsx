import DoctorEarnings from "@/components/Molecules/DoctorEarnings/DoctorEarnings";
import React from "react";
import DoctorAnalytics from "../DoctorAnalytics/DoctorAnalytics";

const DoctorDashboard = () => {
    return (
        <div className="flex justify-around w-full max-xl:flex-col">
            <DoctorEarnings />
            <DoctorAnalytics />
        </div>
    );
};

export default DoctorDashboard;
