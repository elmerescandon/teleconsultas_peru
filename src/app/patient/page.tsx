import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PatientHome from "@/components/Templates/PatientHome/PatientHome";
import React from "react";

const Patient = () => {
    return (
        <div className="flex flex-col max-xl:h-full">
            <Header />
            <PatientHome />
            <Footer />
        </div>
    );
};

export default Patient;
