import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";


export const getAllAvailableDates = async (doctorId : string, specialityId: string) => {

    try{
        const allAvailableDates : IAvailabilitySlots[]  = [];
        const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId), where("speciality_id", "==", specialityId)));
        const snapShot = await getDocs(q);
    
        if (snapShot.empty) {
            throw new Error("No se pudo obtener la disponibilidad del doctor, intente nuevamente más tarde");
        }
    
        const docDate = snapShot.docs[0];
        const dateCollection = collection(docDate.ref, 'availability_slots');
        const dateSnapshots = await getDocs(dateCollection);
    
        if (dateSnapshots.empty) {
            throw new Error("No hay disponibilidad para este doctor");
        }
    
        dateSnapshots.forEach((doc) => {
            allAvailableDates.push(doc.data() as IAvailabilitySlots);
        });

        return allAvailableDates;

    } catch (error) {
        throw error as Error ;
    }


}