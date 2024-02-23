import { collection, addDoc } from 'firebase/firestore';
import dbFirestore from '../config';
import IAppointment from '@/utils/Interfaces/reducers/IAppointment';
import createZoomAppointment from '@/lib/zoom/createZoomAppointment';
import updateAppointmentField from './updateAppointmentField';
import setAvailabilityToSlot from '../Availability/setAvailabilitySlotsState';

const createNewAppointment = async (appointment: IAppointment) => {
    const { date, specialityId, doctorId, startDate, endDate, _id } = appointment;
    const dateParts = date.split("-");
    const newDate = new Date(
        parseInt(dateParts[0]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[2]),
    );
    const newAppointment = { ...appointment, date: newDate as unknown };

    try {
        await addDoc(collection(dbFirestore, "appointments"), newAppointment);
        if (startDate === null || endDate === null) throw new Error("No se pudo agendar la cita, inténtelo nuevamente luego.");
        await setAvailabilityToSlot(
            date,
            specialityId,
            doctorId,
            false,
            startDate,
            endDate
        );
        const joinURL = await createZoomAppointment(_id, startDate);
        if (joinURL === null || joinURL === undefined) throw new Error("No se generó la cita en Zoom, inténtelo nuevamente luego");
        updateAppointmentField(_id, "joinURL", joinURL);
    } catch (e) {
        throw e;
    }
}



export default createNewAppointment;