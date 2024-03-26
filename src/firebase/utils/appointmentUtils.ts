import IAppointment from "@/utils/Interfaces/reducers/IAppointment";

export const validateAppointment = (appointment: IAppointment): boolean => {
  const {date, startDate, endDate, status, doctorId, patientId} = appointment;
  return (
    date != null &&
    startDate != null &&
    endDate != null &&
    status != null &&
    doctorId != null &&
    patientId != null
  );
};

export const changeAppointmentStatus = (
  appointment: IAppointment,
  newStatus:
    | "scheduled"
    | "canceled"
    | "completed"
    | "pending"
    | "doctor-canceled"
    | "patient-canceled"
): IAppointment => {
  return {
    ...appointment,
    status: newStatus,
  };
};

export const changeAppointmentDatesToTimestamp = (
  appointment: IAppointment
): IAppointment => {
  if (
    appointment.startDate instanceof Date &&
    appointment.endDate instanceof Date
  ) {
    return {
      ...appointment,
      startDate: appointment.startDate,
      endDate: appointment.endDate,
    };
  } else {
    throw new Error("Dates are not instances of Date");
  }
};
