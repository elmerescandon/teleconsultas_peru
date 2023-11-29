import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { readAppointmentSize } from "./readAppointmentSize";

const getAppointmentId = async (appointment: IAppointment) => {
    const sizeAppointment = await readAppointmentSize();
    const userId = sizeAppointment === undefined ? 1 : sizeAppointment + 1;
    const newAppointment = {...appointment, _id: `appointment${userId}`, date: new Date(appointment.date)}
    return newAppointment;
}

export default getAppointmentId;