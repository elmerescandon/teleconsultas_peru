"use client";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import SucessAppointmentSection from "@/components/Templates/SuccessAppointmentSection/SucessAppointmentSection";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <SucessAppointmentSection />
            <Footer />
        </div>
    );
};

export default page;
