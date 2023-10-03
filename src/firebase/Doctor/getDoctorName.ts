import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IUser from "@/utils/Interfaces/dataModel/IUser";


export const getDoctorName = async (doctorId: string) => {
    const q = query(collection(dbFirestore, "users"), and(where("role", "==", "doctor"), where("_id","==",doctorId)));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }
    return snapShot.docs[0].data() as IUser;
}   