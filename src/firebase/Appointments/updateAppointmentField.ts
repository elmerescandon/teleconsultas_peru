import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import dbFirestore from "../config"

const updateAppointmentField = async <T>(appointmentId: string, field: string, value: T) =>{
    try{
        const q = query(collection(dbFirestore, "appointments"), where("_id", "==", appointmentId));
        const snapShot = await getDocs(q);
        if (snapShot.empty) {
            throw new Error("No se encontró la cita agendada")
        }
        const appointment = snapShot.docs[0]
        await updateDoc(doc(dbFirestore, "appointments",appointment.id), {
            [field]: value
        })
    }
    catch{
        throw new Error("Error actualizando la cita agendada")
    }
}

export default updateAppointmentField;