import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentForms from "@/components/Organisms/ReserveAppointmentForms/ReserveAppointmentForms";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import React, { useState } from "react";

const ReserveAppointmentSection = () => {
    const [appointmentInfo, setAppointmentInfo] = useState({
        specialityId: "",
        doctorId: "",
    });

    const availableAppointments: IAvailableAppointment[] = [
        {
            startDate: new Date(2023, 7, 20, 10, 0),
            endDate: new Date(2023, 7, 20, 10, 30),
            available: true,
        },
        {
            startDate: new Date(2023, 7, 20, 11, 0),
            endDate: new Date(2023, 7, 20, 11, 30),
            available: false,
        },
        {
            startDate: new Date(2023, 7, 20, 10, 30),
            endDate: new Date(2023, 7, 20, 11, 0),
            available: true,
        },
        {
            startDate: new Date(2023, 7, 20, 12, 0),
            endDate: new Date(2023, 7, 20, 12, 30),
            available: true,
        },
    ];

    return (
        <div className="px-48 flex py-10">
            <ReserveAppointmentForms info={} setInfo={} />
            <ReserveAppointmentCalendar />
            <ReserveAppointmentHours
                availableAppointments={availableAppointments}
            />
        </div>
    );
};

export default ReserveAppointmentSection;