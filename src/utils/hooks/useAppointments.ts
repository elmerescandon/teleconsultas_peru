import { useEffect, useState } from "react";
import IAppointment from "../Interfaces/reducers/IAppointment";
import IDateRangeAppointment from "../Interfaces/IDateRangeAppointment";
import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import getUserAppointmentsFiltered from "@/firebase/Appointments/getUserAppointmentsFiltered";
import getUserAppointments from "@/firebase/Appointments/getUserAppointments";

const useAppointments = (date : IDateRangeAppointment, user: IUserInfo, specialityId : string ,setSelectedAppointment: (value: string) => void ) : IAppointment[] => {

    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    const getAppointments = async () => {
        let appointments: IAppointment[] = [];

        if (specialityId === "") {
            appointments = await getUserAppointments(user._id, ["scheduled","pending"]);
        }else{
            appointments = await getUserAppointmentsFiltered(user._id, "scheduled", date, specialityId);
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