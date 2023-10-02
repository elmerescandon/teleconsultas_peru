import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IUser from "@/utils/Interfaces/dataModel/IUser";


export const getAvailableDates = async (date: string, doctorId : string, specialityId: string) => {
    const q = query(collection(dbFirestore, "availability"), and(where("date", "==", date), where("doctor_id", "==", doctorId), where("speciality_id", "==", specialityId)));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }
    const doctors: IUser[] = [];
    snapShot.forEach((doc) => {
        doctors.push(doc.data() as IUser);
    });
    
    return doctors;
}