import DoctorAvailabilityHours from "@/components/Organisms/DoctorAvailabilityHours/DoctorAvailabilityHours";
import ProfileDetailed from "@/components/Organisms/ProfileDetailed/ProfileDetailed";
import ProfileDocs from "@/components/Organisms/ProfileDocs/ProfileDocs";
import ProfileMain from "@/components/Organisms/ProfileMain/ProfileMain";
import React from "react";

const DoctorProfileSection = () => {
    return (
        <div
            className="flex px-48 py-10 flex-wrap 
                        max-2xl:px-10 max-2xl:flex-col
                        max-xl:py-40
                        max-md:px-5"
        >
            <ProfileMain />
            <div
                className="w-2/3 
                           max-2xl:flex max-2xl:flex-col max-2xl:items-center max-2xl:justify-center max-2xl:w-full"
            >
                <DoctorAvailabilityHours />
                <ProfileDetailed />
                <ProfileDocs />
            </div>
        </div>
    );
};

export default DoctorProfileSection;
