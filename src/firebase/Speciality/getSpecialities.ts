import { collection, getDocs, query } from "firebase/firestore";
import dbFirestore from "../config";
import Ispeciality from "@/utils/Interfaces/dataModel/ISpeciality";


export const getSpecialities = async () => {
    const q = query(collection(dbFirestore, "specialities"));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }
    const specialities: Ispeciality[] = [];
    snapShot.forEach((doc) => {
        specialities.push(doc.data() as Ispeciality);
    });
    
    return specialities;
}
