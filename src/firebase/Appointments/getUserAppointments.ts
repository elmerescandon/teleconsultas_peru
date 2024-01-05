import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";

const getUserAppointments = async (userId: string, status: string[]) => {
    const q = query(collection(dbFirestore, "appointments"), and(where("patientId", "==", userId),where("status", "in", status)));
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