import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";


export const getAvailableDates = async (date: string, doctorId : string, specialityId: string) => {
    const q = query(collection(dbFirestore, "availability"), and(where("doctor_id", "==", doctorId), where("speciality_id", "==", specialityId)));
    const snapShot = await getDocs(q);

    if (snapShot.empty) {
        console.log('No hay citas disponibles');
        return null;
    }

    const docDate = snapShot.docs[0];
    const dateCollection = collection(docDate.ref, 'availability_slots');
    const dateQuey = query(dateCollection, where("date", "==", date));
    const dateDocs = await getDocs(dateQuey);

    if (dateDocs.empty) {
        console.log('No hay citas en esta fecha');
        return null;
    }

    return dateDocs.docs[0].data().slots as IAvailableAppointment[];

}