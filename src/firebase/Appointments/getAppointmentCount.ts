import { and, collection, getCountFromServer, query, where } from "firebase/firestore";
import dbFirestore from "../config";

const getAppointmentCount = async (id: string, role: string, status: string[]) => {
    const q = query(collection(dbFirestore, "appointments"), and(where(`${role === 'doctor' ? "doctorId" : "patientId" }`, "==", id),where("status", "in", status)));
    const snapShot = await getCountFromServer(q);
    return snapShot.data().count;
}

export default getAppointmentCount;