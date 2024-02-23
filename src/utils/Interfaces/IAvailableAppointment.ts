import { DateValue } from "../alias/alias";

interface IAvailableAppointment {
        startDate: DateValue;
        endDate: DateValue;
        available: boolean;
}

export default IAvailableAppointment;