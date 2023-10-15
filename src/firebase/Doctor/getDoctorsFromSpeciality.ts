import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IUser from "@/utils/Interfaces/dataModel/IUser";


export const getDoctorsFromSpeciality = async (speciality: string) => {
    const q = query(collection(dbFirestore, "users"), and(where("role", "==", "doctor"), where("specialities", "array-contains" , speciality)));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return [];
    }
    const doctors: IUser[] = [];
    snapShot.forEach((doc) => {
        doctors.push(doc.data() as IUser);
    });
    
    return doctors;
}