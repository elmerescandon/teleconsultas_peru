import { collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";

const checkAppointment = async (appointmentId: string) => {
    const q = query(collection(dbFirestore, "appointments"), where("_id", "==", appointmentId));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return false;
    }
    return true;
}

export default checkAppointment;