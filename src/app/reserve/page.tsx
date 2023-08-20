import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ReserveAppointmentSection from "@/components/Templates/ReserveAppointmentSection/ReserveAppointmentSection";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <ReserveAppointmentSection />
            <Footer />
        </div>
    );
};

export default page;
