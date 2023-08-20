import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ProfileSection from "@/components/Templates/ProfileSection/ProfileSection";
import React from "react";

const Profile = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <ProfileSection />
            <Footer />
        </div>
    );
};

export default Profile;
