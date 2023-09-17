import IDateRangeAppointment from "./IDateRangeAppointment";

interface IAppointmentFilter {
    date: IDateRangeAppointment,
    speciality: string,
    patientName: string
}

export default IAppointmentFilter;
