import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";

const getAllPatientAppointments = async (userId: string) => {
    const q = query(collection(dbFirestore, "appointments"),where("patientId", "==", userId));
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

export default getAllPatientAppointments;