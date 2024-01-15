import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";


const emptyAvailableData = async (specialityId : string, doctorId : string) => {

    try {
        const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId), 
                                                                     where("speciality_id", "==", specialityId)));
        let snapShot = await getDocs(q);
        
        if (snapShot.empty) {
            return true;
        }
        return false;
    } catch (error) {
        throw error;
    }


}

export default emptyAvailableData;