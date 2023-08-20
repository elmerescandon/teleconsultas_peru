import IAppointment from "./IAppointment";

interface IDayData {
    date: Date;
    appointments: IAppointment[];
}

export default IDayData;