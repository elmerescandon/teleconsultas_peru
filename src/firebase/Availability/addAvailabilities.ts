import {
  Timestamp,
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
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";

const addAvailabilities = async (
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
    // Add to dateArray the date if it doesn't exist
    await updateDoc(docDate.ref, {
      dateArray: arrayUnion(date),
    });

    const dateCollection = collection(docDate.ref, "availability_slots");
    const dateQuery = query(dateCollection, where("date", "==", date));
    const dateDocs = await getDocs(dateQuery);

    if (dateDocs.empty) {
      await addDoc(dateCollection, {date, slots});
      return;
    }

    const dateDoc = dateDocs.docs[0];
    const dateDocData =
      dateDocs.docs[0].data() as unknown as IAvailabilitySlots;
    // add to dateDocData.slots the new slots, if the slot already exists don't add it

    const dateSolts = dateDocData.slots.map((slot) => {
      return (slot.startDate as Timestamp).toDate().toISOString();
    });

    console.log("currentSlots", dateSolts);

    slots.forEach((slot) => {
      if (!dateSolts.includes((slot.startDate as Date).toISOString())) {
        dateDocData.slots.push(slot);
      }
    });

    await updateDoc(dateDoc.ref, {...{slots: dateDocData.slots}});
  } catch (error) {
    throw error;
  }
};

export default addAvailabilities;
