import SelectReservation from "@/components/Organisms/SelectReservation/SelectReservation";
import React, { useState } from "react";
import ReserveAppointmentSection from "../ReserveAppointmentSection/ReserveAppointmentSection";
import ReserveAvailabilitySection from "../ReserveAvailabilitySection/ReserveAvailabilitySection";

const ReserveMainSection = () => {
    const [type, setType] = useState(0);
    return (
        <div>
            <SelectReservation type={type} setType={setType} />
            {type === 0 ? <ReserveAppointmentSection /> : null}
            {type === 1 ? <ReserveAvailabilitySection /> : null}
        </div>
    );
};

export default ReserveMainSection;
