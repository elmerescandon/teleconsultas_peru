import {
    Timestamp,
    and,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import dbFirestore from "../config";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";

export const getAllAvailableDates = async (
    doctorId: string,
    specialityId: string
) => {

    const fromDate = Timestamp.fromDate(new Date(Date.now() - 86400000));

    try {
        const allAvailableDates: IAvailabilitySlots[] = [];
        const q = query(
            collection(dbFirestore, "availability"),
            and(
                where("doctor_id", "==", doctorId),
                where("speciality_id", "==", specialityId),
                where("date", ">=", fromDate)
            )
        );
        const snapShot = await getDocs(q);

        if (snapShot.empty) {
            throw new Error(
                "Todavía no se han agregado nuevos horarios, por favor agregue uno nuevo."
            );
        }

        const docDate = snapShot.docs[0];
        const dateCollection = collection(docDate.ref, "availability_slots");
        const dateSnapshots = await getDocs(dateCollection);

        if (dateSnapshots.empty) {
            throw new Error("No hay disponibilidad para este doctor.");
        }

        dateSnapshots.forEach((doc) => {
            allAvailableDates.push(doc.data() as IAvailabilitySlots);
        });

        return allAvailableDates;
    } catch (error) {
        throw error as Error;
    }
};
