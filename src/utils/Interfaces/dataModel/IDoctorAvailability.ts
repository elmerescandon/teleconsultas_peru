import IAvailableAppointment from "../IAvailableAppointment";

interface IDoctorAvailability {
    _id: string;
    doctor_id: string;
    specialty_id: string;
    availability_slots: {
      date: string;
      slots: IAvailableAppointment[];
    }[];
    other_fields: any;
  }
  

export default IDoctorAvailability;