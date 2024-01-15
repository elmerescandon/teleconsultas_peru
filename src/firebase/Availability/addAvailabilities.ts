import { addDoc, and, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import dbFirestore from "../config";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";


const addAvailabilities = async (date:string, specialityId : string, doctorId : string, slots: IAvailableAppointment[]) => {

    try {
        const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId), where("speciality_id", "==", specialityId)));
        let snapShot = await getDocs(q);
    
        if (snapShot.empty) {
            await addDoc(collection(dbFirestore, "availability"), {doctor_id: doctorId, speciality_id: specialityId});
            snapShot = await getDocs(q);
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
        // slots.forEach((slot) => {
        //     const index = availabilitySlots.slots.findIndex((s) => {
        //         return s.startDate === slot.startDate && s.endDate === slot.endDate;
        //     });
        //     if (index === -1) {
        //         availabilitySlots.slots.push(slot);
        //     }else{
        //         availabilitySlots.slots[index] = slot;
        //     }
        // });
        await updateDoc(dateDoc.ref, {...{slots: slots}})
    } catch (error) {
        throw error;
    }


}

export default addAvailabilities;