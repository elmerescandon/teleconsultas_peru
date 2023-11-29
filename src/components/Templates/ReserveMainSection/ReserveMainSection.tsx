"use client";
import SelectReservation from "@/components/Organisms/SelectReservation/SelectReservation";
import React, { useState } from "react";
import ReserveAppointmentSection from "../ReserveAppointmentSection/ReserveAppointmentSection";
import ReserveAvailabilitySection from "../ReserveAvailabilitySection/ReserveAvailabilitySection";

const ReserveMainSection = () => {
    const [type, setType] = useState(1);
    return (
        <div>
            {/* <SelectReservation type={type} setType={setType} /> */}
            {/* {type === 0 ? <ReserveAvailabilitySection /> : null} */}
            {type === 1 ? <ReserveAppointmentSection /> : null}
        </div>
    );
};

export default ReserveMainSection;
