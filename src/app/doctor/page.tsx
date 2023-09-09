import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import DoctorHome from "@/components/Templates/DoctorHome/DoctorHome";
import React from "react";

const Doctor = () => {
    return (
        <div className="flex flex-col h-screen max-xl:h-full">
            <Header />
            <DoctorHome />
            <Footer />
        </div>
    );
};

export default Doctor;
