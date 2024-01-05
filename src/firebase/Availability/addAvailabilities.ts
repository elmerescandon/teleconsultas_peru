import { addDoc, and, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import dbFirestore from "../config";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";


const addAvailabilities = async (date:string, specialityId : string, doctorId : string, slots: IAvailableAppointment[]) => {

    try {
        const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId), where("speciality_id", "==", specialityId)));
        const snapShot = await getDocs(q);
    
        if (snapShot.empty) {
            console.log(specialityId);
            throw new Error("No se encontró el doctor");
        }
    
        const docDate = snapShot.docs[0];
        const dateCollection = collection(docDate.ref, 'availability_slots');
        const dateQuery = query(dateCollection, where("date", "==", date));
        const dateDocs = await getDocs(dateQuery)
    
        if (dateDocs.empty) {
            await addDoc(dateCollection, {date, slots})
            return;
        }
    
        const dateDoc = dateDocs.docs[0];
        let availabilitySlots =  dateDoc.data() as IAvailabilitySlots;
    
        // check if slot already exists, if not, add it
        slots.forEach((slot) => {
            const index = availabilitySlots.slots.findIndex((s) => {
                return s.startDate === slot.startDate && s.endDate === slot.endDate;
            });
            if (index === -1) {
                availabilitySlots.slots.push(slot);
            }else{
                throw new Error("Alguno de los horarios ya existe, por favor verifique");
            }
        });
        await updateDoc(dateDoc.ref, {...availabilitySlots})
    } catch (error) {
        throw error;
    }


}

export default addAvailabilities;