import { useEffect, useState } from "react";
import IAppointment from "../Interfaces/reducers/IAppointment";
import IDateRangeAppointment from "../Interfaces/IDateRangeAppointment";
import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import getUserAppointmentsFiltered from "@/firebase/Appointments/getUserAppointmentsFiltered";
import getUserAppointments from "@/firebase/Appointments/getUserAppointments";

const useAppointments = (date : IDateRangeAppointment, user: IUserInfo, setSelectedAppointment: (value: string) => void ) : IAppointment[] => {

    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    const getAppointments = async () => {
        let appointments: IAppointment[] = [];
        if (date.init === null || date.finish === null) {
            appointments = await getUserAppointments(user._id, "pending");
        }else{
            appointments = await getUserAppointmentsFiltered(user._id, "pending", date, "speciality1");
        }
        setAppointments(appointments);
    };

    useEffect(() => {
        getAppointments();
        setSelectedAppointment("");
    }, [date]);

    return appointments;

}

export default useAppointments;