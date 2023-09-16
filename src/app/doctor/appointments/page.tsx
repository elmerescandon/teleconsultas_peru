import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import DoctorAppointmentSection from "@/components/Templates/DoctorAppointmentSection/DoctorAppointmentSection";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <DoctorAppointmentSection />
            <Footer />
        </div>
    );
};

export default page;
