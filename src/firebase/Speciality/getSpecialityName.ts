import { collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import Ispeciality from "@/utils/Interfaces/dataModel/ISpeciality";


export const getSpecialityName = async (specialityId: string) => {
    const q = query(collection(dbFirestore, "specialities"), where("_id", "==", specialityId));

    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }
    return snapShot.docs[0].data() as Ispeciality;
}
