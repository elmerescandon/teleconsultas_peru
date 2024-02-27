import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IDoctorAvailability from "@/utils/Interfaces/dataModel/IDoctorAvailability";


export const getAvailableDays = async (doctorId: string, specialityId: string) => {
    const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId), where("speciality_id", "==", specialityId)));
    const snapShot = await getDocs(q);

    if (snapShot.empty) {
        return null;
    }

    const docDate = snapShot.docs[0];
    return docDate.data() as IDoctorAvailability;

}