import { useEffect, useState } from "react";
import IAppointment from "../Interfaces/reducers/IAppointment";
import IDateRangeAppointment from "../Interfaces/IDateRangeAppointment";
import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import getAppointmentsFiltered from "@/firebase/Appointments/getAppointmentsFiltered";

const useAppointments = (date: IDateRangeAppointment, user: IUserInfo, specialityId: string, setSelectedAppointment: (value: string) => void): IAppointment[] => {

    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    const getAppointments = async () => {
        let appointments: IAppointment[] = [];
        appointments = await getAppointmentsFiltered(user._id, user.role, ["scheduled", "pending"], date, specialityId);
        setAppointments(appointments);
    };

    useEffect(() => {
        getAppointments();
        setSelectedAppointment("");
    }, [date]);

    return appointments;

}

export default useAppointments;