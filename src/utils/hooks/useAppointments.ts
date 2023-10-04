import { useEffect, useState } from "react";
import IAppointment from "../Interfaces/reducers/IAppointment";
import IDateRangeAppointment from "../Interfaces/IDateRangeAppointment";
import getUserAppointments from "@/firebase/Appointments/getUserAppointments";
import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";

const useAppointments = (date : IDateRangeAppointment, user: IUserInfo, setSelectedAppointment: (value: string) => void ) : IAppointment[] => {

    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    const getAppointments = async () => {
        console.log(user._id)
        const appointments = await getUserAppointments(user._id, "pending");
        console.log(appointments)
        setAppointments(appointments);
    };

    useEffect(() => {
        getAppointments();
        setSelectedAppointment("");
    }, [date]);

    return appointments;

}

export default useAppointments;