"use client";
import React from "react";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ReserveAppointmentSection from "@/components/Templates/ReserveAppointmentSection/ReserveAppointmentSection";

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
