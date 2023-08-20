import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentForms from "@/components/Organisms/ReserveAppointmentForms/ReserveAppointmentForms";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import React from "react";

const ReserveAppointmentSection = () => {
    return (
        <div>
            <ReserveAppointmentForms />
            <ReserveAppointmentCalendar />
            <ReserveAppointmentHours />
        </div>
    );
};

export default ReserveAppointmentSection;
