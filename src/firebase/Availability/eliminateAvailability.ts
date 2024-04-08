import {
    and,
    collection,
    deleteDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import dbFirestore from "../config";
import {DateValue} from "@/utils/alias/alias";

const eliminateAvailability = async (
    specialityId: string,
    doctorId: string,
    startDate: DateValue,
    endDate: DateValue
) => {
    try {
        const q = query(
            collection(dbFirestore, "availability"),
            and(
                where("doctor_id", "==", doctorId),
                where("speciality_id", "==", specialityId)
            )
        );
        let snapShot = await getDocs(q);

        if (snapShot.empty) {
            throw new Error(
                "No existe disponibilidad para el doctor y especialidad seleccionados."
            );
        }

        const docDate = snapShot.docs[0];
        const dateCollection = collection(docDate.ref, "availability_slots");

        if (startDate instanceof Date && endDate instanceof Date) {
            throw new Error("Error en el tipo de dato de fecha.");
        }

        const dateQuery = query(
            dateCollection,
            where("startDate", "==", startDate)
        );
        const dateDocs = await getDocs(dateQuery);

        if (dateDocs.empty) {
            throw new Error(
                "No existe disponibilidad para la fecha seleccionada."
            );
        }

        const dateDoc = dateDocs.docs[0];
        await deleteDoc(dateDoc.ref);
    } catch (error) {
        throw error;
    }
};

export default eliminateAvailability;
