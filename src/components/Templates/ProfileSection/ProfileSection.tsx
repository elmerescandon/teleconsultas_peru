import ProfileDetailed from "@/components/Organisms/ProfileDetailed/ProfileDetailed";
import ProfileMain from "@/components/Organisms/ProfileMain/ProfileMain";
import ProfilePaying from "@/components/Organisms/ProfilePaying/ProfilePaying";
import React from "react";

const ProfileSection = () => {
    return (
        <div className="flex px-48 py-10 flex-wrap max-xl:px-4 max-xl:py-40 max-xl:flex-col h-[90vh]">
            <ProfileMain />
            <div className="w-2/3">
                <ProfilePaying />
                <ProfileDetailed />
            </div>
        </div>
    );
};

export default ProfileSection;
