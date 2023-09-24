import { useEffect, useState } from "react";
import IAppointment from "../Interfaces/reducers/IAppointment";
import IDateRangeAppointment from "../Interfaces/IDateRangeAppointment";
import AppointmentsMockup from "../mockups/AppointmentsMockup";

const useAppointments = (date : IDateRangeAppointment, setSelectedAppointment: (value: string) => void ) : IAppointment[] => {


    const getAppointments = () => {
        const data = AppointmentsMockup.filter((appointment) => {
            if (date.init === null || date.finish === null) {
                return appointment.status === "completed";
            }

            return (
                appointment.status === "completed" &&
                new Date(appointment.date) >= new Date(date.init) &&
                new Date(appointment.date) <= new Date(date.finish)
            );
        });
        return data;
    };

    const [appointments, setAppointments] = useState<IAppointment[]>(getAppointments());





    useEffect(() => {
        const newAppointments = getAppointments();
        setAppointments(newAppointments);
        setSelectedAppointment("");
    }, [date]);

    return appointments;

}

export default useAppointments;