import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";

const getAppointment = async (appointmentId: string) => {
    const q = query(collection(dbFirestore, "appointments"), where("_id", "==", appointmentId));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }

    const appointment = snapShot.docs[0].data();
    return appointment as IAppointment;
}

export default getAppointment;