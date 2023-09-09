import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import PatientHistorySection from "@/components/Templates/PatientHistorySection/PatientHistorySection";
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <PatientHistorySection />
            <Footer />
        </div>
    );
};

export default page;
