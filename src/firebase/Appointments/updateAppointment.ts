import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import dbFirestore from "../config";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";

const updateAppointment = async (
  appointmentId: string,
  appointmentObjects: Partial<IAppointment>
) => {
  try {
    const q = query(
      collection(dbFirestore, "appointments"),
      where("_id", "==", appointmentId)
    );
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
      throw new Error("No se encontró la cita agendada");
    }
    const appointment = snapShot.docs[0];
    await updateDoc(doc(dbFirestore, "appointments", appointment.id), {
      ...appointmentObjects,
    });
  } catch {
    throw new Error("Error actualizando la cita agendada");
  }
};

export default updateAppointment;
