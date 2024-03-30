import {
  addDoc,
  and,
  arrayUnion,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import dbFirestore from "../config";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";

const createAvailabilitySlots = async (
  date: Date,
  specialityId: string,
  doctorId: string,
  slots: IAvailableAppointment[]
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
    await updateDoc(docDate.ref, {
      dateArray: arrayUnion(date),
    });

    const dateCollection = collection(docDate.ref, "availability_slots");

    for (const slot of slots) {
      console.log(slot);
      await addDoc(dateCollection, slot);
    }
  } catch (error) {
    throw error;
  }
};

export default createAvailabilitySlots;
