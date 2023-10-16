"use client";
import React, { useState } from "react";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ReserveAppointmentSection from "@/components/Templates/ReserveAppointmentSection/ReserveAppointmentSection";
import SelectReservation from "@/components/Organisms/SelectReservation/SelectReservation";

const page = () => {
    const [type, setType] = useState(0);
    return (
        <div>
            <Header />
            <SelectReservation type={type} setType={setType} />
            {type === 0 ? <ReserveAppointmentSection /> : null}
            <Footer />
        </div>
    );
};

export default page;
