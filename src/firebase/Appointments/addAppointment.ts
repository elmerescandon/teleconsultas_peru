import {collection, addDoc} from 'firebase/firestore';
import dbFirestore from '../config';
import IAppointment from '@/utils/Interfaces/reducers/IAppointment';
import getAppointmentId from './getAppointmentId';

const addAppointment = async (appointment: IAppointment) => {
    try {
        const newAppointment = await getAppointmentId(appointment);
        await addDoc(collection(dbFirestore, "appointments"), newAppointment);        
    } catch (e) {
        throw new Error("No se pudo agendar la cita, inténtelo nuevamente luego. Error:" + e);
    }
}



export default addAppointment;