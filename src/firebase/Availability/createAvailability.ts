import { addDoc, collection } from "firebase/firestore";
import dbFirestore from "../config";

const createAvailability = async (specialityId: string, doctorId: string) => {
    try {
        await addDoc(collection(dbFirestore, "availability"), { doctor_id: doctorId, speciality_id: specialityId, dateArray: [] });

    } catch (error) {
        throw new Error("No se pudo crear la disponibilidad.");
    }
}

export default createAvailability;