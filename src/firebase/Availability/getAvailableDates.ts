import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import { DateValue } from "@/utils/alias/alias";


export const getAvailableDates = async (date: DateValue, doctorId: string, specialityId: string) => {
    const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId), where("speciality_id", "==", specialityId)));
    const snapShot = await getDocs(q);

    if (snapShot.empty) {
        return null;
    }

    const docDate = snapShot.docs[0];
    const dateCollection = collection(docDate.ref, 'availability_slots');
    const dateQuey = query(dateCollection, where("date", "==", date));
    const dateDocs = await getDocs(dateQuey);

    if (dateDocs.empty) {
        return null;
    }

    return dateDocs.docs[0].data().slots as IAvailableAppointment[];

}