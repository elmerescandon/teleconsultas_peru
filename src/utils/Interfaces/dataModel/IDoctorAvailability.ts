import IAvailabilitySlots from "./IAvailabilitySlots";

interface IDoctorAvailability {
    _id: string;
    doctor_id: string;
    speciality_id: string;
    other_fields?: any;
    availability_slots?: IAvailabilitySlots[];
}
  

export default IDoctorAvailability;