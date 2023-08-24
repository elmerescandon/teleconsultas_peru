import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentForms from "@/components/Organisms/ReserveAppointmentForms/ReserveAppointmentForms";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import { getAvailableAppointments } from "@/utils/functions/utils";
import React, { useEffect, useState } from "react";

const ReserveAppointmentSection = () => {
    const [availableAppointments, setAvailableAppointments] = useState<
        IAvailableAppointment[]
    >([]);
    const appointment = useAppointment();
    const { date, doctorId, specialityId } = appointment;

    useEffect(() => {
        console.log(appointment);
        if (date !== "") {
            //  This getAvailable is a mock function that returns the available appointments for the date
            const available = getAvailableAppointments(
                date,
                doctorId,
                specialityId
            );
            setAvailableAppointments(available);
        }
    }, [appointment]);

    return (
        <div className="px-48 flex py-10 max-xl:flex-col max-xl:px-10 max-xl:items-center">
            <ReserveAppointmentForms />
            <ReserveAppointmentCalendar />
            <ReserveAppointmentHours
                availableAppointments={availableAppointments}
            />
        </div>
    );
};

export default ReserveAppointmentSection;
