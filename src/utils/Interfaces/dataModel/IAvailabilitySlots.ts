import { DateValue } from "@/utils/alias/alias";
import IAvailableAppointment from "../IAvailableAppointment";

interface IAvailabilitySlots {
    date: DateValue;
    slots: IAvailableAppointment[];
}

export default IAvailabilitySlots;