import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { readAppointmentSize } from "./readAppointmentSize";

const getAppointmentId = async (appointment: IAppointment) => {
    const sizeAppointment = await readAppointmentSize();
    const userId = sizeAppointment === undefined ? 1 : sizeAppointment + 1;
    const dateParts = appointment.date.split("-");
    const newDate = new Date(
        parseInt(dateParts[0]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[2])
    );
    const newAppointment = { ...appointment, _id: `appointment${userId}`, date: newDate }
    return newAppointment;
}

export default getAppointmentId;