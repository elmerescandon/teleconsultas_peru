import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IUser from "@/utils/Interfaces/dataModel/IUser";


export const getPatientName = async (patientId: string) => {
    const q = query(collection(dbFirestore, "users"), and(where("role", "==", "patient"), where("_id","==",patientId)));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }
    return snapShot.docs[0].data() as IUser;
}   