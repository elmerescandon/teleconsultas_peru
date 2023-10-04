import IAvailableAppointment from "../IAvailableAppointment";

interface IAvailabilitySlots{
    date: string;
    slots: IAvailableAppointment[];
}

export default IAvailabilitySlots;