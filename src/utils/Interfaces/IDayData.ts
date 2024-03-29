import IAppointment from "./reducers/IAppointment";

interface IDayData {
    date: Date;
    appointments: IAppointment[];
}

export default IDayData;