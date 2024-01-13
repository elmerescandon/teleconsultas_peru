import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { Firestore, Timestamp, and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";
import getAppointments from "./getAppointments";

const getAppointmentsFiltered = async (id: string, role: string, status: string[], date: IDateRangeAppointment , specialityId: string) => {

    if (date.init === null || date.finish === null) {
        return await getAppointments(id, role, status);
    }

    const initDate = Timestamp.fromDate(new Date(date.init));
    const finishDate = Timestamp.fromDate(new Date(date.finish));
    const q = query(collection(dbFirestore, "appointments"), and(where(`${role === "patient" ? "patientId" : "doctorId"}`, "==", id),
                                                                 where("status", "in", status), 
                                                                //  where("specialityId", "==", specialityId),
                                                                 where("date", ">=",initDate), 
                                                                 where("date", "<=", finishDate)
                                                                 ));
                                                                 
    
    const snapShot = await getDocs(q);
    const appointments: IAppointment[] = [];
    if (snapShot.empty) {
        return appointments;
    }
    snapShot.docs.forEach((doc) => {
        const appointment = doc.data() as IAppointment;
        appointments.push(appointment);
    });
    return appointments;
    


}

export default getAppointmentsFiltered;