import CalendarSection from "@/components/Organisms/CalendarSection/CalendarSection";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import React from "react";

const Reserve = () => {
    return (
        <div>
            <Header />
            <div className="page-body">
                <CalendarSection />
            </div>
            <Footer />
        </div>
    );
};

export default Reserve;
