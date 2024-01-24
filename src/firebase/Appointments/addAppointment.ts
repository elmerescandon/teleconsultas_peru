import {collection, addDoc} from 'firebase/firestore';
import dbFirestore from '../config';
import IAppointment from '@/utils/Interfaces/reducers/IAppointment';
import getAppointmentId from './getAppointmentId';
import createZoomAppointment from '@/lib/zoom/createZoomAppointment';
import updateAppointmentField from './updateAppointmentField';

const addAppointment = async (appointment: IAppointment) => {
    try {
        const newAppointment = await getAppointmentId(appointment);
        await addDoc(collection(dbFirestore, "appointments"), newAppointment);        
        const joinURL = await createZoomAppointment(newAppointment._id, newAppointment.startDate);
        updateAppointmentField(newAppointment._id, "joinURL", joinURL);
        return newAppointment._id;
    } catch (e) {
        throw new Error("No se pudo agendar la cita, inténtelo nuevamente luego." + e);
    }
}



export default addAppointment;