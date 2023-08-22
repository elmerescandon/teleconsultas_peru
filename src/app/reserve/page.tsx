"use client";
import React from "react";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ReserveAppointmentSection from "@/components/Templates/ReserveAppointmentSection/ReserveAppointmentSection";
import AppointmentProvider from "@/utils/context/AppointmentContext/AppointmentContext";

const page = () => {
    return (
        <div>
            <Header />
            <AppointmentProvider>
                <ReserveAppointmentSection />
            </AppointmentProvider>
            <Footer />
        </div>
    );
};

export default page;
