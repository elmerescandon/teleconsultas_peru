import React from "react";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ReserveMainSection from "@/components/Templates/ReserveMainSection/ReserveMainSection";

const page = () => {
    return (
        <div>
            <Header />
            <ReserveMainSection />
            <Footer />
        </div>
    );
};

export default page;
