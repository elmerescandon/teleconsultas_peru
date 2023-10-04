import { and, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import dbFirestore from "../config";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";


const setAvailabilityToSlot = async (date:string, specialityIdId : string, doctorId : string, availability: boolean, startDate: string, endDate: string) => {
    const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId), where("speciality_id", "==", specialityIdId)));
    const snapShot = await getDocs(q);

    if (snapShot.empty) {
        return null;
    }

    const docDate = snapShot.docs[0];
    const dateCollection = collection(docDate.ref, 'availability_slots');
    const dateQuery = query(dateCollection, where("date", "==", date));
    const dateDocs = await getDocs(dateQuery)
    if (dateDocs.empty) {
        return null;
    }

    const dateDoc = dateDocs.docs[0];
    let availabilitySlots =  dateDoc.data() as IAvailabilitySlots;

    const index = availabilitySlots.slots.findIndex((slot) => {
        return slot.startDate === startDate && slot.endDate === endDate;
    });
    availabilitySlots.slots[index].available = availability;
    await updateDoc(dateDoc.ref, {...availabilitySlots})
}

export default setAvailabilityToSlot;