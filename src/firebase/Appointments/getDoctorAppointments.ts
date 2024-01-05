import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";

const getDoctorAppointments = async (doctorId: string, status: string[]) => {
    const q = query(collection(dbFirestore, "appointments"), and(where("doctorId", "==", doctorId),where("status", "in", status)));
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

export default getDoctorAppointments;