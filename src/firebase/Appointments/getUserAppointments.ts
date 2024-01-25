import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { Timestamp, and, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import dbFirestore from "../config";

const getUserAppointments = async (userId: string, status: string[]) => {
    const q = query(collection(dbFirestore, "appointments"), and(where("patientId", "==", userId),
        where("status", "in", status),
        where("date", ">=", Timestamp.fromDate(new Date(Date.now() - 86400000)))), orderBy("date", "asc"));
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

export default getUserAppointments;