import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import updateAppointmentField from "./updateAppointmentField";

export const updateAppointmentCanceled = async (appointment: IAppointment) => {

    if (appointment.date === null) throw new Error("No se pudo agendar la cita, inténtelo nuevamente luego.");
    const newDate = appointment.date instanceof Date ? appointment.date : appointment.date.toDate();

    updateAppointmentField(appointment._id, "status", "pending");
    updateAppointmentField(appointment._id, "doctorId", appointment.doctorId);
    updateAppointmentField(appointment._id, "date", newDate);
    updateAppointmentField(appointment._id, "startDate", appointment.startDate);
    updateAppointmentField(appointment._id, "endDate", appointment.endDate);
}
