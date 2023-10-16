"use client";
import React, { useState } from "react";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import ReserveAppointmentSection from "@/components/Templates/ReserveAppointmentSection/ReserveAppointmentSection";
import SelectReservation from "@/components/Organisms/SelectReservation/SelectReservation";
import ReserveAvailabilitySection from "@/components/Templates/ReserveAvailabilitySection/ReserveAvailabilitySection";

const page = () => {
    const [type, setType] = useState(0);
    return (
        <div>
            <Header />
            <SelectReservation type={type} setType={setType} />
            {type === 0 ? <ReserveAppointmentSection /> : null}
            {type === 1 ? <ReserveAvailabilitySection /> : null}
            <Footer />
        </div>
    );
};

export default page;
