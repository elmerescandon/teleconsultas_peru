import {collection, getDocs, query, where} from 'firebase/firestore';
import dbFirestore from '../config';

export const readAppointmentSize = async () => {
    const q = query(collection(dbFirestore, "appointments"));
    try{
        const querySnapshot = await getDocs(q);
        return querySnapshot.size;
    } catch (e) {
        throw new Error("No se pudo agendar la cita, inténtelo nuevamente luego. Error: " + e);
    }
}

