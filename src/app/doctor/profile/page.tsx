"use client";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import DoctorProfileSection from "@/components/Templates/DoctorProfileSection/DoctorProfileSection";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <DoctorProfileSection />
            <Footer />
        </div>
    );
};

export default page;
