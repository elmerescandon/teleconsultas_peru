import {collection, addDoc, Timestamp, updateDoc} from "firebase/firestore";
import dbFirestore from "../config";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {validateAppointment} from "../utils/appointmentUtils";

const createAppointment = async (appointment: IAppointment) => {
  try {
    if (!validateAppointment(appointment))
      throw new Error("Datos de la cita inválidos");

    const docRef = await addDoc(collection(dbFirestore, "appointments"), {
      ...appointment,
      date: new Date(appointment.date as Date),
      startDate: new Date(appointment.startDate as Date),
      endDate: new Date(appointment.endDate as Date),
    });

    // Update according to new ID
    await updateDoc(docRef, {_id: `app_${docRef.id}`});

    return `app_${docRef.id}`;
  } catch (e) {
    throw e;
  }
};

export default createAppointment;
