import {
  Timestamp,
  and,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import dbFirestore from "../config";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import {DateValue} from "@/utils/alias/alias";

export const getAvailableDates = async (
  date: DateValue,
  doctorId: string,
  specialityId: string
) => {
  const q = query(
    collection(dbFirestore, "availability"),
    and(
      where("doctor_id", "==", doctorId),
      where("speciality_id", "==", specialityId)
    )
  );
  const snapShot = await getDocs(q);
  if (snapShot.empty) {
    return null;
  }

  const docDate = snapShot.docs[0];
  const dateCollection = collection(docDate.ref, "availability_slots");
  const startDate = new Date(date as Date);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 1);

  const dateQuery = query(
    dateCollection,
    and(
      where("startDate", ">=", Timestamp.fromDate(startDate)),
      where("startDate", "<", Timestamp.fromDate(endDate))
    )
  );

  const dateDocs = await getDocs(dateQuery);

  if (dateDocs.empty) {
    return null;
  }

  return dateDocs.docs.map((doc) => doc.data() as IAvailableAppointment);
};
