import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import INotes from "@/utils/Interfaces/dataModel/INotes";


export const getNotesData = async (appointmentId: string, role: string) => {
    const q = query(collection(dbFirestore, "notes"), and(where("appointmentId", "==", appointmentId)));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }
    const notesDoc = snapShot.docs[0].data();

    const text =   role === "doctor" ?   (notesDoc as INotes).doctorNotes : (notesDoc as INotes).patientNotes; 
    return atob(text);
}