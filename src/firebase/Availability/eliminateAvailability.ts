import { Timestamp, and, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import dbFirestore from "../config";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";
import { DateValue } from "@/utils/alias/alias";


const eliminateAvailability = async (date: DateValue, specialityId: string, doctorId: string, startDate: DateValue, endDate: DateValue) => {

    try {
        const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId),
            where("speciality_id", "==", specialityId)));
        let snapShot = await getDocs(q);

        if (snapShot.empty) {
            throw new Error("No existe disponibilidad para el doctor y especialidad seleccionados.");
        }

        const docDate = snapShot.docs[0];
        const dateCollection = collection(docDate.ref, 'availability_slots');
        const dateQuery = query(dateCollection, where("date", "==", date));
        const dateDocs = await getDocs(dateQuery)

        if (dateDocs.empty) {
            throw new Error("No existe disponibilidad para la fecha seleccionada.");
        }


        if (startDate instanceof Date && endDate instanceof Date) {
            throw new Error("Error en el tipo de dato de fecha.");
        }

        const dateDoc = dateDocs.docs[0]
        const dateDocData = dateDocs.docs[0].data() as unknown as IAvailabilitySlots;
        const slots = dateDocData.slots.filter((slot) => {
            const startDateValidation = (slot.startDate as Timestamp).isEqual(startDate as Timestamp)
            const endDateValidations = (slot.endDate as Timestamp).isEqual(endDate as Timestamp)
            return !startDateValidation && !endDateValidations;
        });
        await updateDoc(dateDoc.ref, { ... { slots: slots } })
    } catch (error) {
        throw error;
    }


}

export default eliminateAvailability;